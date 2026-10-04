import SideHeading from './SideHeading';
import Text from './Text';
import AnimationButton from './AnimationButton';
export default function QualityInOurIndustrySection() {
  return (
    <section className="w-full lg:min-h-[600px]  bg-[url('/images/industry-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full py-[110px] wrapper lg:gap-[20px] gap-[40px] lg:text-left text-center lg:items-start items-center lg:flex-row flex-col flex justify-between">
        <div className="lg:max-w-[453px]">
        <SideHeading textclass='text-[#FFFFFF]' content="VSRP are furthering quality" contentOrange=" in our industries." />
        </div>
        <div className="flex  lg:max-w-[382px] lg:items-start items-center flex-col gap-[40px]">
          <Text
            textclass="text-[#FFFFFF]"

            paragraph="Across private, commercial and civil projects, our rubber products are custom-engineered to be reliable and cost-effective. We support the specific needs of specialised providers, plugging the gaps in their projects so they can continue to deliver at the highest level."
          />
          <AnimationButton
            children="Ask A Question"
            bg="#F05430"
            hoverBg="#dc3d20"
            circleBg="#ffffff"
            buttonclass="lg:h-[56px] gap-[20px] max-w-fit  w-full  p-[4px] pl-[16px] text-[14px] "
            arrow="/icons/arrow-icon-orange.svg"
          />
        </div>
      </div>
    </section>
  );
}
