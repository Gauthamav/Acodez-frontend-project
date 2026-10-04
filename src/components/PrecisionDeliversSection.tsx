import backgroundRectangleImage from '/images/backgroundRectangles.svg';
import SideHeading from './SideHeading';
import { precisionStatsData } from '../data/precisionStatsData';
import PrecisionStatCard from './PrecisionStatCard';
import Text from './Text';
import AnimationButton from './AnimationButton';
import { paragraphsInPrecisionDeliverSection } from '../data/textData';

export default function PrecisionDeliversSection() {
  return (
    <section className=" flex relative bg-[#E0E8EC]">
      <div className="absolute bottom-0 right-0 ">
        <img className="opacity-[50%]" src={backgroundRectangleImage}></img>
      </div>
      <div className="flex wrapper lg:py-[110px] py-[60px] lg:flex-row flex-col items-center gap-[40px]">
        <div className="w-full flex justify-center">
          <div className=" flex h-full justify-center flex-col gap-[45px]">
            <div className="lg:max-w-[630px]  w-full">
              <SideHeading
                textclass="lg:text-left text-center"
                content="Wherever Precision Is Needed,"
                contentOrange="VSRP Delivers."
              />
            </div>

            <div className="flex flex-col  gap-[30px]">
              <div className="w-full flex lg:max-w-[522px] justify-around lg:justify-between">
                {precisionStatsData.slice(0, 2).map(item => (
                  <PrecisionStatCard key={item.id} value={item.value} label={item.label} />
                ))}
              </div>
              <hr className=" h-0 lg:max-w-[522px]   border-0 border-t border-dashed  opacity-20 border-[#221F1F]" />
              <div className="w-full flex  lg:max-w-[522px] justify-around lg:justify-between">
                {precisionStatsData.slice(2).map(item => (
                  <PrecisionStatCard key={item.id} value={item.value} label={item.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex lg:justify-center">
          <div className=" flex text-[#221F1F] flex-col items-start relative z-10 h-full">
            <div className="w-full flex lg:justify-start justify-center ">
              <p className="font-nohemi text-center lg:text-left lg:max-w-lg font-medium text-lg sm:text-xl md:text-2xl lg:text-[30px]">
                We're engineers, manufacturers and problem-solvers.
              </p>
            </div>
            <div className="lg:max-w-[542px] mt-[38px] mb-[66px] flex flex-col gap-[12px] ">
              {paragraphsInPrecisionDeliverSection.map(para => (
                <Text key={para.id} textclass={para.textclass} paragraph={para.paragraph} />
              ))}
            </div>
            <div className="flex w-full lg:justify-start justify-center">
              <AnimationButton
                children="About VSRP"
                bg="rgba(23, 24, 28, 0.1)"
                circleBg="#F05430"
                buttonclass="lg:h-[56px] !text-[#221F1F]  p-[4px] pl-[16px]  lg:text-[14px] text-xs md:text-sm gap-[14px] !font-normal leading-[16.8px]"
                arrow="/icons/arrow-icon-white.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
