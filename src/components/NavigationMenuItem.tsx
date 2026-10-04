type Props = {
  active: number;
  setActive: (index: number) => void;
  borderPosition: string;
  label: string;
  icon: string;
  index: number;
};

export default function NavigationMenuItem({ active, index, setActive, borderPosition, label, icon }: Props) {
  return (
    <div onMouseEnter={() => setActive(index)} className="flex cursor-pointer w-full flex-col gap-[30px]">
      {index === active ? <div className={`absolute w-[2px] h-[21px] bg-[#F45330]  ${borderPosition}`}></div> : ''}
      <div className="flex items-center gap-[19px]">
        <img alt={icon} src={icon}></img>
        <p className="font-nohemi font-medium text-[16px] ">{label}</p>
      </div>
      <hr
        className={`w-full border-0 border-t border-dashed  ${index === active ? 'border-[#F45330]' : 'border-[#FFFFFF] opacity-20'} `}
      />
    </div>
  );
}
