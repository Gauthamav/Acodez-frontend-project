import SideHeading from './SideHeading';
import StickyAnimation from './StickyAnimation';
import Text from './Text';


export default function ConceptToDeliverySection() {
  return (
    <section className="bg-[#E0E8EC] relative py-[60px] lg:py-[110px] w-full">

      <div className="w-full wrapper flex flex-col gap-[30px] lg:gap-[50px]">
        <div className="flex text-center w-full items-center flex-col gap-[20px]">
          <SideHeading content="From Concept to Delivery, We Make it " contentOrange="Happen" />
          <Text
            paragraph="A proven process built around collaboration, precision and a commitment to quality at every step."
            textclass="opacity-80 text-[#221F1F]"
          />
        </div>
        <StickyAnimation />
      </div>
    </section>
  );
}
