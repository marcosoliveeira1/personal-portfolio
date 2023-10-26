import { CONFIG } from "@/constants";
import { SocialIcons } from "./social-links";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
export const HeaderContact = () => {
  const { contact } = CONFIG;
  return (
    <div className="absolute w-full lg:block z-10 hidden">
      <div className="flex justify-between items-center container px-2 pt-3 mb-3">
        <div className="flex gap-[25px] text-sm/[17px]">
          <a href={`mailto:+${CONFIG.contact.email}`} className="flex items-center gap-[5px]">
            <FaEnvelope size={14} className="inline text-blue-600" />
            <span className="font-[400] t ">{contact.email}</span>
          </a>

          <a href={`tel:+${CONFIG.contact.phone}`} className=" flex items-center gap-[3px]">
            <FaPhoneAlt size={14} className="inline text-blue-600" />
            <span className="font-[400]">{contact.phone}</span>
          </a>

        </div>
        <div className="flex gap-[20px] ">
          <SocialIcons social={contact.social} />
        </div>
      </div>
    </div >
  );
};

