
import Text from './Text';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function RubberCompanyCard({ title, description, icon }: Props) {
  return (
    <div className="relative lg:max-w-[414px] xl:w-full xl:max-w-full max-w-full w-full flex flex-col sm:min-h-[300px] min-h-[200px] lg:min-h-[372px] bg-[#FFFFFF] p-[20px]  sm:p-[40px]">
      <div className=" sm:w-[70px] sm:h-[70px] w-[55px] h-[55px] left-0 top-0 bg-[#F45330] flex items-center rounded-full justify-center">
        <img className="object-cover lg:w-auto lg:h-auto w-[30px] h-[30px]" alt={`${title} icon`} src={icon}></img>
      </div>
      <div className="flex-1 flex flex-col gap-[20px] justify-end">
        <div className="relative w-full">
          <hr className="h-0 w-full border-0 border-t border-dashed opacity-20 border-[#221F1F]" />
          <motion.hr
            className="absolute left-0 top-0 h-0 w-full border-0 border-t border-dashed border-[#F45330]"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{
              clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 0% 0 0)'],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.8, 1],
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 0.1,
            }}
          />
        </div>
        <p className="font-nohemi font-medium text-sm md:text-base lg:text-[24px] ">{title}</p>
        <Text textclass="opacity-80 text-[#221F1F]" paragraph={description} />
      </div>
    </div>
  );
}
