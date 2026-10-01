import { navigationMenuData } from '../data/navigationMenuData';
import NavigationMenuItem from './NavigationMenuItem';
import { useState } from 'react';
export default function NavigationMenu() {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="bg-[#17181C] p-[50px] gap-[30px] relative justify-items-center grid lg:h-full h-[320px] overflow-y-scroll  max-w-[900px] w-full  lg:grid-cols-2  text-white">
      <div className="max-w-[395px] flex flex-col gap-[30px] w-full">
        {navigationMenuData.slice(0, 4).map(item => (
          <NavigationMenuItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            index={item.id}
            active={active}
            setActive={setActive}
            borderPosition="left-0"
          />
        ))}
      </div>
      <div className="max-w-[395px] flex flex-col gap-[30px] w-full">
        {navigationMenuData.slice(4).map(item => (
          <NavigationMenuItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            index={item.id}
            active={active}
            setActive={setActive}
            borderPosition="left-0 lg:left-auto lg:right-0"
          />
        ))}
      </div>
    </div>
  );
}
