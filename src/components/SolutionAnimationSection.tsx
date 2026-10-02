import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { LazyMotion, domAnimation, m, MotionConfig } from 'framer-motion'; // or "motion/react"

const INDUSTRIES = [
  { tab: 'Civil', title: 'Civil' },
  { tab: 'Mining', title: 'Mining' },
  { tab: 'Agriculture', title: 'Agriculture & Irrigation' },
  { tab: 'Building', title: 'Building' },
  { tab: 'Transport & Infrastructure', title: 'Transport & Infrastructure' },
];

/* ---------- SPEED CONTROLS ---------- */
const DURATION = 1; // seconds each industry stays active
const SLIDE_DURATION = 0.6; // center text movement
const COLOR_DURATION = 0.3; // tab label color fade
const LINE_DURATION = 0.4; // orange line moving between tabs
/* ------------------------------------ */

/* ---------- RESPONSIVE SIZES ---------- */
// row = distance between rows, scale = non-highlighted / highlighted font size
const SIZES = {
  base: { row: 50, scale: 12 / 26 },
  md: { row: 80, scale: 20 / 48 },
  lg: { row: 110, scale: 24 / 60 },
} as const;
type Breakpoint = keyof typeof SIZES;
/* -------------------------------------- */

// Breakpoint hook: reacts only when a breakpoint is crossed (not on every resize event)
const MD = '(min-width: 768px)';
const LG = '(min-width: 1024px)';

function subscribe(cb: () => void) {
  const lg = window.matchMedia(LG);
  const md = window.matchMedia(MD);
  lg.addEventListener('change', cb);
  md.addEventListener('change', cb);
  return () => {
    lg.removeEventListener('change', cb);
    md.removeEventListener('change', cb);
  };
}
const getSnapshot = (): Breakpoint =>
  window.matchMedia(LG).matches ? 'lg' : window.matchMedia(MD).matches ? 'md' : 'base';
const getServerSnapshot = (): Breakpoint => 'lg';

export default function SolutionAnimationSection() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const [layout, setLayout] = useState<{ total: number; rects: { left: number; width: number }[] }>({
    total: 0,
    rects: [],
  });

  const bp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { row: ROW_HEIGHT, scale: textScale } = SIZES[bp];
  const n = INDUSTRIES.length;

  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // run the cycle only while the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // auto-advance; clicking a tab restarts the timer
  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % n), DURATION * 1000);
    return () => clearTimeout(id);
  }, [index, inView, n]);

  // measure ALL tabs once (and on size change), not on every index change
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const measure = () =>
      setLayout({
        total: inner.offsetWidth,
        rects: tabRefs.current.map(t => ({ left: t?.offsetLeft ?? 0, width: t?.offsetWidth ?? 0 })),
      });

    measure();
    const ro = new ResizeObserver(measure); // also catches font loading
    ro.observe(inner);
    tabRefs.current.forEach(t => t && ro.observe(t));
    return () => ro.disconnect();
  }, []);

  // keep the active tab in view, only when the row actually overflows (mobile)
  useEffect(() => {
    const scroller = scrollRef.current;
    const tab = tabRefs.current[index];
    if (!scroller || !tab || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollTo({
      left: tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [index]);

  // orange section of the line, derived from measurements (no extra state)
  const active = layout.rects[index];
  const clipPath = active
    ? `inset(0 ${Math.max(0, layout.total - active.left - active.width)}px 0 ${active.left}px)`
    : 'inset(0 100% 0 0)';

  return (
    <div className="bg-[#17181C] max-w-full text-white w-full flex flex-col justify-between items-center sm:py-10 py-5 px-6">
      <p className="sm:text-sm text-xs font-medium uppercase">Our Industries</p>

      {/* CENTER: vertical list */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <div className="relative w-full sm:my-[80px] my-[50px] lg:my-[70px] xl:my-[80px] overflow-hidden" style={{ height: ROW_HEIGHT * 3 }}>
            {INDUSTRIES.map((item, i) => {
              let offset = i - index;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <m.div
                  key={item.tab}
                  className="absolute left-0 right-0 flex items-center justify-center text-center font-nohemi font-semibold will-change-transform transition-colors"
                  style={{
                    top: ROW_HEIGHT,
                    height: ROW_HEIGHT,
                    color: isActive ? '#FFFFFF' : '#8A8B8F', // color handled by CSS, not JS
                    transitionDuration: `${SLIDE_DURATION}s`,
                  }}
                  initial={false}
                  // only GPU-friendly properties are animated by framer-motion
                  animate={{
                    y: offset * ROW_HEIGHT,
                    opacity: isVisible ? (isActive ? 1 : 0.3) : 0,
                    scale: isActive ? 1 : textScale,
                  }}
                  transition={{ duration: SLIDE_DURATION, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={!isActive}>
                  <span className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[50px] xl:text-[60px] leading-none">
                    {item.title}
                  </span>
                </m.div>
              );
            })}
          </div>
        </LazyMotion>
      </MotionConfig>

      {/* BOTTOM: one continuous line + tabs */}
      <div
        ref={scrollRef}
        className="w-full max-w-[700px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div ref={innerRef} className="relative w-max min-w-full flex flex-col gap-4">
          <div className="relative w-full">
            <hr className="h-0 w-full border-0 border-t border-dashed opacity-20 border-white" />
            <hr
              className="absolute opacity-80 left-0 top-0 h-0 w-full border-0 border-t border-dashed border-[#F45330]"
              style={{ clipPath, transition: `clip-path ${LINE_DURATION}s ease-in-out` }}
            />
          </div>

          <div className="flex justify-between gap-8">
            {INDUSTRIES.map((item, i) => (
              <button
                key={item.tab}
                ref={el => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setIndex(i)}
                className="text-left whitespace-nowrap cursor-pointer text-xs sm:text-sm md:text-base font-nohemi transition-colors"
                style={{
                  color: i === index ? '#F45330' : '#FFFFFF',
                  transitionDuration: `${COLOR_DURATION}s`,
                }}>
                {item.tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
