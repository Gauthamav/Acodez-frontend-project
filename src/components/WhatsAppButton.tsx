import whatsappIcon from '/icons/whatsappicon.svg';
import { WHATS_APP_NUMBER } from '../utils/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me${WHATS_APP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed w-[60px] h-[60px] right-[20px] top-[90%] z-20 flex items-center justify-center bg-white/15  shadow-[0px_4px_35px_rgba(0,0,0,0.15)]  rounded-full">
      <img className="object-cover" src={whatsappIcon} />
    </a>
  );
}
