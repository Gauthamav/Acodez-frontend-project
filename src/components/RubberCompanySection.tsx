
import { rubberCompanyCardData } from '../data/rubberCompanyCardData';
import RubberCompanyCard from './RubberCompanyCard';
import SideHeading from './SideHeading';
import Text from './Text';
export default function RubberCompany() {
  return (
    <section className="lg:py-[110px] py-[60px] bg-[#E0E8EC]">
      <div className="wrapper flex flex-col gap-[40px]">
        <div className="flex lg:flex-row flex-col lg:items-baseline items-center justify-between gap-[25px] sm:gap-[40px]">
          <div className="lg:max-w-[480px] xl:w-full w-full lg:text-left text-center">
            <SideHeading content="More Than A " contentOrange="Rubber Company." />
          </div>
          <div className="lg:max-w-[470px] xl:w-full w-full lg:text-left text-center">
            <Text
              textclass="opacity-80"
              paragraph="We're engineers, problem-solvers and manufacturing partners, helping businesses turn unique requirements into reliable, high-performance rubber solutions."
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-[30px] gap-[15px]">
          {rubberCompanyCardData.map(data => (
            <RubberCompanyCard key={data.id} title={data.title} description={data.description} icon={data.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
