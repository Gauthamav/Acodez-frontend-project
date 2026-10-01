type Props = {
  value: string;
  label: string;
};

export default function PrecisionStatCard({ value, label }: Props) {
  return (
    <div className="flex flex-col gap-[3px]">
      <h4 className="font-nohemi text-[#221F1F] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[45px] ">
        {value}
        <span className=" text-[#F05430]">+</span>
      </h4>
      <p className="font-manrope  text-[#221F1F] font-medium lg:text-[16px] md:text-[14px] sm:text-sm text-xs">
        {label}
      </p>
    </div>
  );
}
