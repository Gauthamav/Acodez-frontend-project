import { Header } from './Header';
import { HERO_SECTION_VIDEO_SRC, HERO_SECTION_FALLBACK_IMAGE } from '../utils/constants';
import Text from './Text';
import AnimationButton from './AnimationButton';
import ScrollDownButton from './ScrollDownButton';
export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col ">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        poster={HERO_SECTION_FALLBACK_IMAGE}
        src={HERO_SECTION_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 z-10 bg-[#0A0A0A]/60" />

      <div className="relative z-20">
        <Header />
      </div>
      <div className="wrapper relative z-10  flex-1  w-full flex flex-col  justify-center   text-white">
        <div className="absolute top-[90%]">
          <ScrollDownButton />
        </div>
        <div className="flex gap-5 sm:gap-0 flex-col">
          <div className="w-full">
            <div className="flex justify-center  sm:justify-start xl:justify-end xl:max-w-[50%] max-w-full w-full ">
              <h1 className="sm:w-fit w-full flex flex-col sm:items-end items-center font-nohemi  font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-[82px]">
                <span className="block">Custom Rubber</span>
                <span className="block text-right">
                  Solutions<span className="text-[#F05430]">.</span>
                </span>
              </h1>
            </div>
          </div>

          <div className="w-full flex xl:justify-end">
            <div className="flex  xl:justify-start sm:justify-end justify-center xl:max-w-[50%] w-full ">
              <h1 className="sm:w-fit w-full font-nohemi flex flex-col  sm:items-end items-center font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-[82px]">
                <span className="block">Engineered To </span>
                <span className="block  w-full text-center sm:text-left">
                  Perform<span className="text-[#F05430]">.</span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-row flex-col-reverse flex items-center gap-[30px] mt-[60px] lg:mt-[40px]">
          <div className="w-full flex 2xl:justify-center  justify-center lg:justify-start ">
            <div className="lg:max-w-[409px] px-5 max-w-fit lg:px-0 ">
              <Text
                textclass="text-[#FFFFFF]  opacity-80   lg:text-left text-center"
                paragraph="For more than 20 years, we've helped Australian businesses solve problems with engineered rubber solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need it."></Text>
            </div>
          </div>
          <div className="w-full flex gap-[25px] sm:flex-row flex-col items-center justify-center lg:justify-start">
            <AnimationButton
              children="Discuss Your Project"
              bg="rgba(255, 255, 255, 0.3)"
              circleBg="#F05430"
              buttonclass="lg:h-[56px]  backdrop-blur-[6px]  p-[4px] pl-[16px] text-xs md:text-sm  lg:text-[14px] gap-[14px] !font-normal leading-[16.8px]"
              arrow="/icons/arrow-icon-white.svg"
            />
            <div className="flex flex-col items-start">
              <AnimationButton
                children="See What We Do"
                buttonclass="h-[56px]  !h-0  pb-[4px]  !gap-[1px] justify-start lg:text-[14px] !font-normal leading-[16.8px]   text-xs md:text-sm"
                arrow="/icons/arrow-icon-white.svg"
                imageclass="!h-[10px] !w-[25px]"
              />
              <hr className="m-0 h-px w-[120px] mt-[3px] border-0 bg-[repeating-linear-gradient(to_right,#FFFFFF_0_1.5px,transparent_1.5px_2.5px)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
