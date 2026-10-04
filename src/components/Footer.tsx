import { footerCompanyData, footerIndustryData, socialMediaData } from '../data/footerData';
import Text from './Text';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" h-full bg-[#17181C] backdrop:backdrop-blur-[6px] relative">
      <div className="absolute left-0 bottom-0">
        <img className="object-cover" src="/images/footer-bg.png"></img>
      </div>
      <div className="w-full  h-full relative  lg:py-[100px] py-[40px] z-10 wrapper flex md:flex-row flex-col-reverse md:gap-[10px] gap-[40px] justify-between">
        <div className="flex w-full md:flex-col sm:flex-row flex-col sm:gap-[10px] gap-[30px] md:gap-[100px] justify-between md:items-start sm:items-center  ">
          <div className="flex flex-col gap-[30px]">
            <img className="lg:max-w-[256px] sm:max-w-[200px] max-w-[150px]   " src="/images/logo.svg"></img>
            <Text
              textclass="opacity-60 max-w-[305px] lg:!text-sm !text-xs text-[#FFFFFF]"
              paragraph="For over 20 years, VSRP has delivered engineered rubber solutions built around the unique requirements of Australian businesses."></Text>
            <div className="flex mt-[10px] gap-[14px]">
              {socialMediaData.map(data => (
                <a
                  href={data.alt}
                  key={data.id}
                  className="lg:w-[43px] lg:h-[43px] w-[30px] h-[30px] rounded-[2px] border cursor-pointer border-dashed border-[#FFFFFF]/20 flex items-center justify-center">
                  <img className="object-cover lg:w-[24px] w-[18px] " src={data.image} alt={data.alt}></img>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <img className="max-w-[27px] object-cover" src="/images/footer-iso.svg" alt="iso-standard-image"></img>
            <span className="font-nohemi text-[#FFFFFF] font-normal sm:text-sm text-xs ">ISO9001:2015 Accredited</span>
          </div>
        </div>
        <div className="grid w-full md:gap-[50px] gap-[35px]  grid-cols-2">
          <div className="max-w-[255px] w-full pt-[20px] md:pt-[30px] gap-[20px] md:gap-[30px] flex flex-col  border-t border-dashed border-white/20">
            <p className="font-nohemi font-medium uppercase text-xs sm:text-sm text-[#F05430]">Company</p>
            <ul className="flex flex-col gap-[8px]">
              {footerCompanyData.map(data => (
                <Link key={data.id} to={data.path}>
                  <Text textclass="text-[#FFFFFF] hover:text-[#F05430]  opacity-80" paragraph={data.name} />
                </Link>
              ))}
            </ul>
          </div>
          <div className="max-w-[255px] w-full pt-[20px] md:pt-[30px] gap-[20px] md:gap-[30px] flex flex-col  border-t border-dashed border-white/20">
            <p className="font-nohemi font-medium uppercase text-xs sm:text-sm text-[#F05430]">Industries</p>
            <ul className="flex flex-col gap-[8px]">
              {footerIndustryData.map(data => (
                <Link key={data.id} to={data.path}>
                  <Text textclass="text-[#FFFFFF] hover:text-[#F05430] opacity-80" paragraph={data.name} />
                </Link>
              ))}
            </ul>
          </div>
          <div className="max-w-[255px] w-full pt-[20px] md:pt-[30px] gap-[20px] md:gap-[30px] flex flex-col  border-t border-dashed border-white/20">
            <p className="font-nohemi font-medium uppercase text-xs sm:text-sm text-[#F05430]">Contact</p>
            <span className="font-manrope font-bold text-[#FFFFFF]  md:text-base sm:text-sm text-xs">
              1800 787 777, +61 (2) 8834 9958
            </span>
          </div>
          <div className="max-w-[255px] w-full pt-[20px] md:pt-[30px] gap-[20px] md:gap-[30px] flex flex-col  border-t border-dashed border-white/20">
            <p className="font-nohemi font-medium uppercase text-xs sm:text-sm text-[#F05430]">Location</p>
            <span className="font-manrope font-bold text-[#FFFFFF]  md:text-base sm:text-sm text-xs">
              Unit 3, 10 Banksia Place,
              <br></br> South Windsor NSW 2756
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-dashed border-white/20" />
      <div className="flex relative gap-[10px] z-10 sm:flex-row flex-col wrapper md:py-[40px] py-[20px] items-center justify-between ">
        <span className="font-nohemi font-medium md:text-[12px] sm:text-[10px] text-[8px] text-[#FFFFFF] uppercase">
          Copyright © 2026 VSRP
        </span>
        <span className="font-nohemi font-medium md:text-[12px] sm:text-[10px] text-[8px] text-[#FFFFFF] uppercase">
          Site by acodez
        </span>
        <div className="flex items-center gap-[20px]">
          <span className="font-nohemi font-medium md:text-[12px] sm:text-[10px] text-[8px] text-[#FFFFFF] uppercase">
            privacy Policy
          </span>
          <span className="font-nohemi font-medium md:text-[12px] sm:text-[10px] text-[8px] text-[#FFFFFF] uppercase">
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
