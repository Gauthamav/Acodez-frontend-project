import AnimationButton from './AnimationButton';
type Props = {
  title: string;
  image: string;
  imageAlt: string;
};

export default function IndustryInsightCard({ title, image, imageAlt }: Props) {
  return (
    <div className="flex lg:max-w-[413px] xl:max-w-full w-full flex-col gap-[10px]">
      <img className="sm:h-auto w-full h-[200px] lg:h-[284px] object-fill " src={image} alt={imageAlt}></img>
      <div className="bg-[#FFFFFF] p-[20px] flex flex-col gap-[25px]">
        <p className="font-nohemi text-[#221F1F] font-medium lg:text-[20px]  text-sm">{title}</p>
        <div className="flex flex-col items-start">
          <AnimationButton
            children="View Detail"
            buttonclass="h-[56px] !w-fit !h-0  pb-[4px] !text-[#F05430] !gap-[1px] justify-start lg:text-[14px] !font-normal leading-[16.8px]   text-xs md:text-sm"
            arrow="/icons/arrow-icon-orange.svg"
            imageclass="!h-[10px] !w-[25px]"
          />
          <hr className="m-0 h-px w-[84px] mt-[3px] border-0 bg-[#F05430]" />
        </div>
      </div>
    </div>
  );
}
