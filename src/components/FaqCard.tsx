import Text from './Text';
import type { Dispatch, SetStateAction } from 'react';
import plusIcon from '/icons/plus-icon-orange.svg';
import minusIcon from '/icons/minus-icon-orange.svg';

type Props = {
  index: number;
  question: string;
  answer: string;
  open: number | null;
  setOpen: Dispatch<SetStateAction<number | null>>;
};

export default function FaqCard({ index, question, answer, open, setOpen }: Props) {
  const isOpen = open === index;
 

  return (
    <div
      className={`w-full flex pb-[20px] lg:pb-[30px] flex-col border-b-[1px] border-dashed transition-colors duration-300 ${
        isOpen ? 'border-[#F45330]' : 'border-[#221F1F]/10'
      }`}>
      <div className="w-full flex items-center justify-between">
        <p className="lg:text-[20px] sm:text-base text-sm text-[#221F1F] font-nohemi font-medium">{question}</p>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setOpen(prev => (prev === index ? null : index))}
          className="relative w-[32px] h-[32px] shrink-0 cursor-pointer rounded-full border-[1px] border-dashed border-[#F45330]">
          <img
            src={plusIcon}
            alt="accordion-open-icon-plus-sign"
            className={`absolute inset-0 m-auto w-[15px] h-[15px] transition-all duration-300 ease-out ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
          <img
            src={minusIcon}
            alt="accordion-open-icon-minus-sign"
            className={`absolute inset-0 m-auto w-[15px] h-[15px] transition-all duration-300 ease-out ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
          />
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="w-full max-w-[80%] pt-[19px]">
            <Text textclass="!text-[#221F1F] font-normal opacity-60" paragraph={answer} />
          </div>
        </div>
      </div>
    </div>
  );
}
