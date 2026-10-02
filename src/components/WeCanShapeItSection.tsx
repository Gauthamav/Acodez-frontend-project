import WECAN_SHAPE_IT_SECTION_FALLBACK_IMAGE from '/images/ShapeItSectionFallback.png';
import { WE_CAN_SHAPE_IT_SECTION_VIDEO_SRC } from '../utils/constants';
import AnimationButton from './AnimationButton';

export default function WeCanShapeItSection() {
  return (
    <section className="lg:min-h-screen min-h-[80vh] flex flex-col relative">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={WE_CAN_SHAPE_IT_SECTION_VIDEO_SRC}
        poster={WECAN_SHAPE_IT_SECTION_FALLBACK_IMAGE}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="relative wrapper w-full flex items-center flex-col justify-center flex-1">
        <h2 className="w-full text-center text-[#FFFFFF] font-nohemi font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px]">
          Whatever You Need in Rubber, We Can <span className="text-[#F05430]"> Shape It.</span>
        </h2>
        <div className="mt-[40px]">
          <AnimationButton
            children="Discuss Your Project"
            bg="rgba(255, 255, 255, 0.3)"
            circleBg="#F05430"
            buttonclass="h-[56px]  p-[4px] backdrop-blur-[6px]  pl-[16px]  lg:text-[14px] text-xs md:text-sm gap-[14px] !font-normal leading-[16.8px]"
            arrow="/icons/arrow-icon-white.svg"
          />
        </div>
      </div>
    </section>
  );
}
