type Props = {
  paragraph: string;
  textclass?: string;
};

export default function Text({ paragraph, textclass }: Props) {
  return <p className={`  font-manrope font-medium  ${textclass} `}>{paragraph}</p>;
}
