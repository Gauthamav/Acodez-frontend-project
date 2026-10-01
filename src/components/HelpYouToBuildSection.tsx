import { HELP_YOU_TO_BUILD_SECTION_VIDEO_SRC } from '../utils/constants';
import ScrollDownButton from './ScrollDownButton';
import SideHeading from './SideHeading';
import Text from './Text';
import MaskImage from '/images/HelpyouBuildImage.svg';
export default function HelPYouToBuildSection() {
  return (
    <section className="bg-white min-h-[75vh] lg:min-h-screen">
      <div className="flex wrapper w-full flex-col text-center items-center lg:py-[110px] py-[60px]">
        <SideHeading content="What Can We Help You " contentOrange="Build?" />
        <div className="mt-[20px] text-center lg:mb-[90px] mb-[50px]">
          <Text
            paragraph={
              'We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.'
            }
            textclass="lg:text-[16px] md:text-[14px] sm:text-sm text-xs text-[#221F1F] opacity-80 "
          />
        </div>

        <div className="w-full lg:max-w-[380px] md:max-w-[360px] max-w-[300px]   mx-auto aspect-[370/290]">
          <video
            className="w-full h-full object-cover"
            src={HELP_YOU_TO_BUILD_SECTION_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            style={{
              WebkitMaskImage: `url(${MaskImage})`,
              maskImage: `url(${MaskImage})`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
            }}
          />
        </div>
        <div className='mt-[60px]'>
          <ScrollDownButton border="black" imageurl="/icons/downarrowicon-black.svg" />
        </div>
      </div>
    </section>
  );
}
