import AnimationButton from './AnimationButton';
import AutoSlider from './AutoSlider';
import SideHeading from './SideHeading';
import SliderCard, { type SliderCardProps } from './SliderCard';
import { sliderCardData } from '../data/sliderCardData';
// Add / remove items here, the slider adapts automatically.

export default function PrecisionIsNeeded() {
  return (
    <section className="lg:py-[110px] w-full py-[60px] bg-[#FFFFFF]">
      <div className="w-full flex flex-col gap-[40px]">
        <div className="w-full wrapper flex sm:flex-row flex-col items-center sm:gap-[20px] gap-[35px] justify-between">
          <div className="lg:max-w-[45%] sm:text-left text-center sm:max-w-[60%]">
            <SideHeading content="Wherever Precision Is Needed," contentOrange=" VSRP Delivers." />
          </div>
          <AnimationButton
            children="View All  Projects"
            bg="rgba(23, 24, 28, 0.1)"
            circleBg="#F05430"
            buttonclass="lg:h-[56px] p-[4px] pl-[16px] backdrop-blur-[6px] lg:text-[14px] text-xs md:text-sm gap-[14px] !text-[#221F1F] !font-normal leading-[16.8px]"
            arrow="/icons/arrow-icon-white.svg"
          />
        </div>

        <div className="lg:max-w-[97%] max-w-[95%] lg:ml-auto mx-auto lg:mr-0 w-full">
          <AutoSlider>
            {sliderCardData.map(item => (
              <SliderCard key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  );
}
