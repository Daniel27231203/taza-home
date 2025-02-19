import { ILinks } from "@/schema/layoutTypes";
import { GoHomeFill } from "react-icons/go";
import { MdCleanHands } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa";

export const links: ILinks[] = [
  {
    name: "Главная",
    link: "/",
    icon: <GoHomeFill />,
  },
  {
    name: "Услуги",
    link: "/services",
    icon: <MdCleanHands />,
  },
  {
    name: "Наши Работы",
    link: "/works",
    icon: <GiVacuumCleaner />,
  },
  {
    name: "Контакты",
    link: "/contacts",
    icon: <FaPhoneVolume />,
  },
];

export default links;
