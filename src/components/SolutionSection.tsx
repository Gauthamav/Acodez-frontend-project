import AnimationButton from './AnimationButton';
import SideHeading from './SideHeading';
import SolutionAnimationSection from './SolutionAnimationSection';
import Text from './Text';
import excavatorIcon from '/icons/excavator.svg';

export default function SolutionSection() {
  return (
    <section className="lg:py-[110px] py-[60px] wrapper bg-white">
      <div className="flex mb-[40px] items-center  text-center flex-col w-full gap-[20px]">
        <SideHeading content="Rubber Solutions Built For" contentOrange=" Industry." />
        <Text
          textclass="opacity-80 text-[#221F1F] max-w-[670px]"
          paragraph="From infrastructure and mining to agriculture and transport, we help businesses solve complex challenges with engineered rubber solutions."
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-[20px]">
        <div className="lg:max-w-[50%] xl:max-w-full w-full">
          <SolutionAnimationSection />
        </div>
        <div className="group w-full cursor-pointer min-h-full relative overflow-hidden">
          <img
            className="w-full lg:min-h-full h-[300px] sm:h-[400px] object-cover transition-[filter] duration-500 group-hover:grayscale"
            src="/images/mining.png"
            alt="Mining"
          />
          <div className="absolute sm:w-[70px] sm:h-[70px] w-[55px] h-[55px]  sm:top-[40px] sm:left-[40px] top-[30px] left-[30px] bg-[#FFFFFF] flex items-center rounded-full justify-center">
            <img className="object-cover lg:w-auto lg:h-auto w-[35px] " src={excavatorIcon}></img>
          </div>
          <div className="absolute sm:bottom-[40px] sm:right-[40px] bottom-[30px] right-[30px] ">
            <AnimationButton
              children="See Our Capabilities"
              bg="rgba(255, 255, 255, 0.3)"
              circleBg="#F05430"
              buttonclass="h-[56px]  p-[4px] pl-[16px] backdrop-blur-[6px]  lg:text-[14px] text-xs md:text-sm gap-[14px] !font-normal leading-[16.8px]"
              arrow="/icons/arrow-icon-white.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
