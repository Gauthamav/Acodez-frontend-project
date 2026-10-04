import { useState } from 'react';
import AnimationButton from './AnimationButton';
import FaqCard from './FaqCard';
import SideHeading from './SideHeading';
import Text from './Text';
import backgroundRectangleImage from '/images/backgroundRectangle2.svg';
import { faqData } from '../data/faqData';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="lg:py-[110px] relative py-[60px]">
      <div className="absolute bottom-0 left-0 ">
        <img className="opacity-[50%]" src={backgroundRectangleImage}></img>
      </div>
      <div className="wrapper relative  z-10 flex lg:flex-row flex-col justify-between gap-[30px]">
        <div className="lg:max-w-[40%] flex flex-col md:text-left text-center md:items-start items-center gap-[20px] w-full">
          <SideHeading content="A Few Things We Get Asked" contentOrange="Questions" />
          <Text
            paragraph="We’ve heard it all. Here’s everything you need to know before working with us."
            textclass=" text-[#221F1F] lg:mb-[35px] opacity-80"
          />
          <AnimationButton
            children="Ask A Question"
            bg="#F05430"
            hoverBg="#dc3d20"
            circleBg="#ffffff"
            buttonclass="lg:h-[56px]  w-full  p-[4px] pl-[16px] text-[14px] "
            arrow="/icons/arrow-icon-orange.svg"
          />
        </div>
        <div className="w-full lg:max-w-[50%] max-w-full flex flex-col gap-[10px] lg:gap-[30px]">
          {faqData.map((item, index) => (
            <FaqCard
              key={item.id}
              index={index}
              question={item.question}
              answer={item.answer}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
