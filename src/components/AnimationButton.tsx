import { motion, MotionConfig } from 'motion/react';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof motion.button>, 'children' | 'style'> & {
  children?: string;
  bg?: string;
  hoverBg?: string;
  circleBg?: string;
  arrow?: string;
  gap?: string;
  buttonclass?: string;
  imageclass?: string;
};

const arrowClass = 'absolute object-cover inset-0 m-auto h-[10px] w-[14px] select-none';

export default function AnimationButton({
  children,
  imageclass,
  gap,
  bg,
  hoverBg,
  circleBg,
  arrow,
  buttonclass,
  ...props
}: Props) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}>
      <motion.button
        whileHover="hover"
        whileFocus="hover"
        style={{ backgroundColor: bg }}
        variants={{ hover: { backgroundColor: hoverBg } }}
        className={`inline-flex justify-between  cursor-pointer items-center  rounded-full  font-nohemi font-semibold uppercase leading-none text-white ${buttonclass}`}
        {...props}>
        <span className="h-[1em] overflow-hidden">
          <motion.span
            variants={{ hover: { y: '-100%' } }}
            data-label={children}
            className="block h-[1em] after:block after:content-[attr(data-label)]">
            {children}
          </motion.span>
        </span>

        <span
          className={`relative h-[48px] w-[48px] overflow-hidden rounded-full ${imageclass}`}
          style={{ backgroundColor: circleBg }}>
          <motion.img src={arrow} alt="" draggable={false} className={arrowClass} variants={{ hover: { x: 40 } }} />
          <motion.img
            src={arrow}
            alt=""
            draggable={false}
            className={arrowClass}
            initial={{ x: -40 }}
            variants={{ hover: { x: 0, transition: { delay: 0.075 } } }}
          />
        </span>
      </motion.button>
    </MotionConfig>
  );
}
