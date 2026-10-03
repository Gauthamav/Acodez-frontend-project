import { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import ScrollDownButton from './ScrollDownButton';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface Step {
  title: string;
  description: string;
  image: string;
}

const STEPS: readonly Step[] = [
  {
    title: 'Tell Us What You Need',
    description: 'Send us a drawing, sample or specification.',
    image: 'images/whatyouneed1.svg',
  },
  {
    title: "We'll Engineer The Solution",
    description: 'Materials, tooling and manufacturing approach.',
    image: 'images/solution.svg',
  },
  {
    title: "We'll Make It",
    description: 'Materials, tooling and manufacturing approach.',
    image: 'images/makeit.svg',
  },
  {
    title: "We'll Deliver It",
    description: 'Materials, tooling and manufacturing approach.',
    image: 'images/delivery.svg',
  },
] as const;

const STEP_COUNT = STEPS.length;
const ANIMATION_VIEWPORT = STEPS.length - 1;

/**
 * Desktop (md+): unchanged -> section = (STEPS - 1) * 100vh, stage = 80vh.
 * Mobile (<md):  stage = one full screen (100dvh), so the section is
 *                STEPS * 100dvh (one screen of scrolling per step change).
 * Values are exposed as CSS variables so Tailwind can switch them per breakpoint.
 */
const SECTION_STYLE = {
  '--section-h': `${ANIMATION_VIEWPORT * 100}vh`,
  '--section-h-mobile': `${ANIMATION_VIEWPORT * 100}vh`,
} as CSSProperties;

/* ------------------------------------------------------------------ */
/* Image with crossfade                                                */
/* ------------------------------------------------------------------ */

interface StepImageProps {
  src: string;
  alt: string;
  active: boolean;
  reduceMotion: boolean;
}

/**
 * The incoming image fades in on top while the outgoing one stays opaque
 * underneath and only disappears after the fade has finished, so there is
 * never a see-through dip. Only opacity/transform are animated.
 */
const FADE = 0.2;

const StepImage = memo(function StepImage({ src, alt, active, reduceMotion }: StepImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      aria-hidden={!active}
      className="absolute inset-0 overflow-hidden bg-[#E0E8EC]"
      style={{ zIndex: active ? 10 : 0, willChange: 'opacity' }}
      initial={false}
      animate={{ opacity: active ? 1 : 0 }}
      transition={
        reduceMotion ? { duration: 0 } : active ? { duration: FADE, ease: 'easeInOut' } : { duration: 0, delay: FADE }
      }>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center border border-dashed border-slate-400 px-6 text-center text-slate-500">
          {alt}
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          width={900}
          height={700}
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          style={{ willChange: 'transform' }}
          initial={false}
          animate={{ scale: active ? 1 : 1.05 }}
          transition={
            reduceMotion ? { duration: 0 } : active ? { duration: 1.4, ease: 'easeOut' } : { duration: 0, delay: FADE }
          }
        />
      )}
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* Step list item                                                      */
/* ------------------------------------------------------------------ */

interface StepItemProps {
  index: number;
  step: Step;
  isActive: boolean;
  isLast: boolean;
  onSelect: (index: number) => void;
}

const StepItem = memo(function StepItem({ index, step, isActive, isLast, onSelect }: StepItemProps) {
  return (
    <li
      aria-current={isActive ? 'step' : undefined}
      className={`flex w-full gap-3 sm:gap-6 lg:gap-9 ${isLast ? '' : 'md:flex-1'}`}>
      {/* Number + dotted connector */}
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to step ${index + 1}: ${step.title}`}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1px] border-dashed text-sm font-medium transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8603c] sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl ${
            isActive ? 'border-[#F45330] text-[#F45330]' : 'border-[#221F1F] text-[#221F1F]'
          }`}>
          {String(index + 1).padStart(2, '0')}
        </button>
        {/* No vertical margin: the line touches the circle above and the circle below */}
        {!isLast && <div className="w-0 flex-1 border-l-[1px] border-dashed border-[#221F1F]" />}
      </div>

      {/* Text. On mobile the description only shows for the active step (smooth collapse). */}
      <div
        onClick={() => onSelect(index)}
        className={`min-w-0 flex-1 cursor-pointer pt-[7px] sm:pt-1 lg:pt-2 ${isLast ? '' : 'pb-10 md:pb-0'}`}>
        <h3
          className={`text-base font-medium font-nohemi font- leading-snug tracking-tight transition-colors duration-500 sm:text-xl lg:text-[32px] lg:leading-tight ${
            isActive ? 'text-[#F45330]' : 'text-[#221F1F]'
          }`}>
          {step.title}
        </h3>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:grid-rows-[1fr] md:opacity-100 ${
            isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
          <div className="min-h-0 overflow-hidden">
            <p
              className={`mt-1 max-w-md text-sm transition-colors duration-500 sm:mt-2 sm:text-base lg:mt-3 lg:text-lg text-[#221F1F] opacity-80`}>
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
});

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function StickyAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  // Preload every image so nothing pops in mid-transition.
  useEffect(() => {
    STEPS.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
      img.decode?.().catch(() => {});
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    const next = Math.min(STEP_COUNT - 1, Math.max(0, Math.floor(progress * STEP_COUNT)));
    setActive(next);
  });

  const goTo = useCallback(
    (index: number) => {
      const el = sectionRef.current;
      if (!el) return;

      const clamped = Math.min(STEP_COUNT - 1, Math.max(0, index));
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollable = el.offsetHeight - window.innerHeight;
      const target = sectionTop + ((clamped + 0.5) / STEP_COUNT) * scrollable;

      window.scrollTo({ top: target, behavior: reduceMotion ? 'auto' : 'smooth' });
    },
    [reduceMotion],
  );

  return (
    <section
      ref={sectionRef}
      style={SECTION_STYLE}
      className="relative h-[var(--section-h-mobile)] md:h-[var(--section-h)]">
      <div className="sticky top-0 flex h-[80vh] flex-col justify-center overflow-hidden pb-20 md:h-[80vh] md:pb-0">
        {/* Mobile: image on top, steps below. md+: steps left, image right. */}
        <div className="flex flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-stretch md:gap-8 lg:gap-16 lg:px-16">
          {/* Steps (same height as the image on md+) */}
          <ol className="flex min-w-0 flex-1 flex-col">
            {STEPS.map((step, i) => (
              <StepItem
                key={step.title}
                index={i}
                step={step}
                isActive={i === active}
                isLast={i === STEP_COUNT - 1}
                onSelect={goTo}
              />
            ))}
          </ol>

          {/* Images crossfade as the active step changes */}
          <div className="relative order-first h-[34dvh] min-h-[200px] w-full shrink-0 md:order-none md:h-[50vh] md:w-[48%] lg:h-[62vh]">
            {STEPS.map((step, i) => (
              <StepImage
                key={step.image}
                src={step.image}
                alt={step.title}
                active={i === active}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 right-5 sm:right-8 md:bottom-0 md:right-[80px] md:mt-[66px]">
          <ScrollDownButton imageurl="/icons/downarrowicon-black.svg" border="#221F1F" />
        </div>
      </div>
    </section>
  );
}
