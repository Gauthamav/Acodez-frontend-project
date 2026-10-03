import SideHeading from './SideHeading';
import AnimationButton from './AnimationButton';
import Text from './Text';
import { industryInsightData } from '../data/industryInsightData';
import IndustryInsightCard from './IndustryInsightCard';
export default function IndustryInsightSection() {
  return (
    <section className="lg:py-[110px] w-full py-[60px] bg-[#E0E8EC]">
      <div className="w-full flex  wrapper flex-col gap-[40px]">
        <div className="w-full flex sm:flex-row flex-col items-center sm:gap-[20px] gap-[35px] justify-between">
          <div className="xl:max-w-[30%] sm:text-left text-center sm:max-w-[50%]">
            <SideHeading content="Industry  " contentOrange="Insights" />
            <Text
              textclass="text-[#221F1F] opacity-80"
              paragraph="Practical advice, material expertise and engineering knowledge to help you make informed decisions"
            />
          </div>
          <AnimationButton
            children="View All Insights"
            bg="rgba(23, 24, 28, 0.1)"
            circleBg="#F05430"
            buttonclass="h-[56px] p-[4px] pl-[16px] backdrop-blur-[6px] lg:text-[14px] text-xs md:text-sm gap-[14px] !text-[#221F1F] !font-normal leading-[16.8px]"
            arrow="/icons/arrow-icon-white.svg"
          />
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
          {industryInsightData.map(data => (
            <IndustryInsightCard key={data.id} title={data.title} image={data.image} imageAlt={data.imageAlt} />
          ))}
        </div>
      </div>
    </section>
  );
}
