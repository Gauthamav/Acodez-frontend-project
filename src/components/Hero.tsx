import { useState } from 'react';

import { Header } from './Header';
import { HERO_SECTION_VIDEO_SRC, HERO_SECTION_FALLBACK_IMAGE } from '../utils/constants';
import Text from './Text';
import AnimationButton from './AnimationButton';
import ScrollDownButton from './ScrollDownButton';

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <img src={HERO_SECTION_FALLBACK_IMAGE} alt="" className="absolute inset-0 z-0 h-full w-full object-cover" />
      <video
        className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={HERO_SECTION_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
      />
      <div className="absolute inset-0 z-10 bg-[#0A0A0A]/60" />
      <div className="relative z-20">
        <Header />
      </div>
      <div className="wrapper relative z-10 flex w-full flex-1 flex-col justify-center text-white">
        <div className="absolute top-[90%]">
          <ScrollDownButton />
        </div>
        <div className="flex flex-col gap-5 sm:gap-0">
          <div className="w-full">
            <div className="flex w-full max-w-full justify-center sm:justify-start xl:max-w-[50%] xl:justify-end">
              <h1 className="flex w-full flex-col items-center font-nohemi text-4xl font-semibold sm:w-fit sm:items-end sm:text-6xl md:text-7xl lg:text-[82px]">
                <span className="block">Custom Rubber</span>
                <span className="block text-right">
                  Solutions<span className="text-[#F05430]">.</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex w-full xl:justify-end">
            <div className="flex w-full max-w-full justify-center sm:justify-end xl:max-w-[50%] xl:justify-start">
              <h1 className="flex w-full flex-col items-center font-nohemi text-4xl font-semibold sm:w-fit sm:items-end sm:text-6xl md:text-7xl lg:text-[82px]">
                <span className="block">Engineered To</span>

                <span className="block w-full text-center sm:text-left">
                  Perform<span className="text-[#F05430]">.</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex w-full flex-col-reverse items-center gap-[30px] lg:mt-[40px] lg:flex-row">
          {/* Description */}
          <div className="flex w-full justify-center 2xl:justify-center lg:justify-start">
            <div className="max-w-fit px-5 lg:max-w-[409px] lg:px-0">
              <Text
                textclass="text-[#FFFFFF] opacity-80 lg:text-left text-center"
                paragraph="For more than 20 years, we've helped Australian businesses solve problems with engineered rubber solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need it."
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[25px] sm:flex-row lg:justify-start">
            <AnimationButton
              children="Discuss Your Project"
              bg="rgba(255, 255, 255, 0.3)"
              circleBg="#F05430"
              buttonclass="lg:h-[56px] backdrop-blur-[6px] p-[4px] pl-[16px] text-xs md:text-sm lg:text-[14px] gap-[14px] !font-normal leading-[16.8px]"
              arrow="/icons/arrow-icon-white.svg"
            />
            <div className="flex flex-col items-start">
              <AnimationButton
                children="See What We Do"
                buttonclass="h-[56px] !h-0 pb-[4px] !gap-[1px] justify-start lg:text-[14px] !font-normal leading-[16.8px] text-xs md:text-sm"
                arrow="/icons/arrow-icon-white.svg"
                imageclass="!h-[10px] !w-[25px]"
              />
              <hr className="m-0 mt-[3px] h-px w-[120px] border-0 bg-[repeating-linear-gradient(to_right,#FFFFFF_0_1.5px,transparent_1.5px_2.5px)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
