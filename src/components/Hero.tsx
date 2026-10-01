import { Header } from './Header';
import { HERO_SECTION_VIDEO_SRC, HERO_SECTION_FALLBACK_IMAGE } from '../utils/constants';
import Text from './Text';
import AnimationButton from './AnimationButton';
import ScrollDownButton from './ScrollDownButton';
export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_SECTION_VIDEO_SRC}
        poster={HERO_SECTION_FALLBACK_IMAGE}
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
        <ScrollDownButton  />
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

        <div className="w-full lg:flex-row flex-col-reverse flex items-center gap-[30px] mt-[40px]">
          <div className="w-full flex 2xl:justify-center  justify-center lg:justify-start ">
            <div className="lg:max-w-[409px] px-5 max-w-fit lg:px-0 ">
              <Text
                textclass="text-[#FFFFFF] lg:text-[16px] opacity-80   lg:text-[14px] sm:text-sm text-xs lg:text-left text-center"
                paragraph="For more than 20 years, we've helped Australian businesses solve problems with engineered rubber solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need it."></Text>
            </div>
          </div>
          <div className="w-full flex gap-[25px] sm:flex-row flex-col items-center justify-center lg:justify-start">
            <AnimationButton
              children="Discuss Your Project"
              bg="rgba(255, 255, 255, 0.3)"
              circleBg="#F05430"
              buttonclass="h-[56px]  p-[4px] pl-[16px]  lg:text-[14px] text-xs md:text-sm gap-[14px] !font-normal leading-[16.8px]"
              arrow="/icons/arrow-icon-white.svg"
            />
            <div className="flex flex-col items-start">
              <AnimationButton
                children="See What We Do"
                buttonclass="h-[56px] !w-fit !h-0  pb-[4px]  !gap-[1px] justify-start lg:text-[14px] !font-normal leading-[16.8px]   text-xs md:text-sm"
                arrow="/icons/arrow-icon-white.svg"
                imageclass="!h-[10px] !w-[25px]"
              />
              <hr className=" h-0 w-[120px]  mt-[3px] border-0 border-t border-dashed border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
