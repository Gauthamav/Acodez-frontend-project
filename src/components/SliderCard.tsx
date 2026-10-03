import AnimationButton from './AnimationButton';
import Text from './Text';

export interface SliderCardProps {
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export default function SliderCard({
  title,
  description,
  tags = ['Mining', 'EPDM', 'Extrusion', 'Conveyor System'],
  image,
}: SliderCardProps) {
  return (
    <div className="flex flex-col lg:pr-[20px] gap-[30px]">
      {/* width: 300px on mobile, 630px from sm up */}
      <div className="relative h-[350px] lg:h-[511px] flex bg-[#221F1F] shrink-0 w-full lg:w-[630px]">
        <div className="absolute lg:top-[40px] lg:right-[40px] top-[25px] right-[25px]">
          <div className="flex flex-col items-start">
            <AnimationButton
              children="View Project"
              buttonclass="h-[56px] !w-fit !h-0 pb-[4px] !gap-[1px] justify-start !lg:text-[14px] !font-normal !text-xs !md:text-sm"
              arrow="/icons/arrow-icon-white.svg"
              imageclass="!h-[10px] !w-[25px]"
            />
            <hr className="m-0 h-px w-[85px] mt-[3px] border-0 bg-[repeating-linear-gradient(to_right,#FFFFFF_0_1.5px,transparent_1.5px_2.5px)]" />
          </div>
        </div>
        <div className="absolute z-10 bottom-[30px] left-[30px] flex flex-wrap items-center gap-[5px]">
          {tags.map(tag => (
            <span
              key={tag}
              className="h-[36px] px-[20px] rounded-[32px] text-[#FFFFFF] uppercase flex items-center justify-center font-nohemi font-medium lg:text-[14px] sm:text-sm text-xs bg-[rgba(255,255,255,0.3)] backdrop-blur-[6px]">
              {tag}
            </span>
          ))}
        </div>

        <img className="w-full h-full object-fill" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-[15px]">
        <p className="font-nohemi text-[#221F1F] font-medium lg:text-[24px] md:text-[20px] sm:text-base text-sm">
          {title}
        </p>
        <Text textclass="text-[#221F1F] opacity-80 max-w-[550px]" paragraph={description ? description : ''} />
      </div>
    </div>
  );
}
