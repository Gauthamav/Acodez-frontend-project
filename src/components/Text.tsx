type Props = {
  paragraph: string;
  textclass?: string;
};

export default function Text({ paragraph, textclass }: Props) {
  return <p className={` lg:text-[16px] md:text-[14px] sm:text-sm text-xs   font-manrope font-medium  ${textclass} `}>{paragraph}</p>;
}
