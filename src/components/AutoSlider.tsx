import { Children, type ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface AutoSliderProps {
  children: ReactNode; // each child = one slide
  pauseMs?: number; // how long a card rests before sliding on
  duration?: number; // seconds each slide takes
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function AutoSlider({ children, pauseMs = 1500, duration = 1.4 }: AutoSliderProps) {
  const items = Children.toArray(children);
  const n = items.length;
  const track = useRef<HTMLUListElement>(null);
  const index = useRef(0);
  const controls = useAnimationControls();
  const [step, setStep] = useState(0);

  // exact slide width (not rounded), re-measured on resize
  useEffect(() => {
    const measure = () => {
      const w = (track.current?.firstElementChild as HTMLElement).getBoundingClientRect().width;
      setStep(w);
      controls.set({ x: -index.current * w });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [controls]);

  // rest -> glide one card -> rest ... forever
  useEffect(() => {
    if (n < 2 || !step) return;
    let alive = true;
    (async () => {
      while (alive) {
        await sleep(pauseMs);
        if (!alive) return;
        index.current += 1;
        await controls.start({
          x: -index.current * step,
          transition: { duration, ease: [0.45, 0, 0.15, 1] },
        });
        // landed on a clone: jump to the identical original (invisible)
        if (alive && index.current >= n) {
          index.current -= n;
          controls.set({ x: -index.current * step });
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, [n, step, pauseMs, duration, controls]);

  return (
    <div className="w-full overflow-hidden">
      <motion.ul ref={track} className="flex will-change-transform" animate={controls}>
        {[0, 1, 2].map(copy =>
          items.map((item, i) => (
            <li key={`${copy}-${i}`} aria-hidden={copy > 0 || undefined} className="w-full shrink-0 lg:w-auto">
              {item}
            </li>
          )),
        )}
      </motion.ul>
    </div>
  );
}
