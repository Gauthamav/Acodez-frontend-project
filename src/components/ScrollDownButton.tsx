import downArrowIcon from '/icons/downarrow.svg';

type Props = {
  buttonclass?: string;
  imageurl?: string;
  border?: string;
};

export default function ScrollDownButton({ buttonclass, imageurl, border }: Props) {
  return (
    <button className={`flex cursor-pointer max-w-[144px] gap-[7px] w-full items-center ${buttonclass}`}>
      <div
        className={`flex  border border-dashed border-${border ? border : 'white'} rounded-full box-border items-center justify-center w-[34px] h-[34px] `}>
        <img className="w-[11px] object-cover" src={imageurl ? imageurl : downArrowIcon}></img>
      </div>
      <p className="font-nohemi font-semibold lg:text-[14px] sm:text-sm text-xs uppercase">Scroll Down</p>
    </button>
  );
}
