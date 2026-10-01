type Props = {
  content?: string;
  contentOrange?: string;
  textclass?: string;
};

export default function SideHeading({ content, contentOrange, textclass }: Props) {
  return (
    <h2 className={`w-full font-nohemi font-semibold text-3xl md:text-4xl lg:text-4xl xl:text-[50px] leading-tight ${textclass}`}>
      {content} <span className="text-[#F05430]">{contentOrange}</span>
    </h2>
  );
}
