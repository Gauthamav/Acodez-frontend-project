import AnimationButton from './AnimationButton';
import SideHeading from './SideHeading';
import Text from './Text';
import backgroundRectangleImage from '/images/backgroundRectangle2.svg';

export default function FaqSection() {
  return (
    <section className="lg:py-[110px] relative py-[60px]">
      <div className="absolute bottom-0 left-0 ">
        <img className="opacity-[50%]" src={backgroundRectangleImage}></img>
      </div>
      <div className="wrapper relative z-10 flex gap-[20px]">
        <div className="lg:max-w-[40%] flex flex-col gap-[20px] w-full">
          <SideHeading content="A Few Things We Get Asked" contentOrange="Questions" />
          <Text
            paragraph="We’ve heard it all. Here’s everything you need to know before working with us."
            textclass=" text-[#221F1F] mb-[35px] opacity-80"
          />
          <AnimationButton
            children="Ask A Question"
            bg="#F05430"
            hoverBg="#dc3d20"
            circleBg="#ffffff"
            buttonclass="h-[56px] max-w-[207px]  p-[4px] pl-[16px] text-[14px] "
            arrow="/icons/arrow-icon-orange.svg"
          />
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
}
