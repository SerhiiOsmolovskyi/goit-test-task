import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { CgTv } from "react-icons/cg";
import { LuDisc3 } from "react-icons/lu";
import { HiOutlineRadio } from "react-icons/hi2";
import { TbToiletPaper } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { FaFireBurner } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import styles from "./OptionsList.module.css";

export default function OptionsList({ camper, length }) {
  const { adults, engine, transmission, details } = camper;
  const detailsArray = [
    {
      prop: "engine",
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      icon: <MdOutlineLocalGasStation />,
    },
    {
      prop: "transmission",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      icon: <TbAutomaticGearbox />,
    },
    {
      prop: "adults",
      value: `${adults} adult${adults > 1 && "s"}`,
      icon: <IoPeopleOutline />,
    },
    {
      prop: "AC",
      value: "AC",
      icon: <FaWind />,
    },
    {
      prop: "airConditioner",
      value: details.airConditioner
        ? `${details.airConditioner} Air conditioner `
        : false,
      icon: <TbAirConditioning />,
    },
    {
      prop: "bathroom",
      value: Boolean(details.bathroom) && `Bathtube`,
      icon: <FaBath />,
    },
    {
      prop: "shower",
      value: Boolean(details.shower) && `Shower`,
      icon: <LuShowerHead />,
    },
    {
      prop: "kitchen",
      value: Boolean(details.kitchen) && `Kitchen`,
      icon: <TbToolsKitchen2 />,
    },
    {
      prop: "beds",
      value: details.beds
        ? `${details.beds} bed${details.beds > 1 && "s"}`
        : false,
      icon: <IoBedOutline />,
    },
    {
      prop: "TV",
      value: Boolean(details.TV) && `TV`,
      icon: <CgTv />,
    },
    {
      prop: "CD",
      value: Boolean(details.CD) && `CD`,
      icon: <LuDisc3 />,
    },
    {
      prop: "radio",
      value: Boolean(details.radio) && `Radio`,
      icon: <HiOutlineRadio />,
    },
    {
      prop: "toilet",
      value: Boolean(details.toilet) && `Toilet`,
      icon: <TbToiletPaper />,
    },
    {
      prop: "freezer",
      value: Boolean(details.freezer) && `Frige`,
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "hob",
      value: details.hob
        ? `${details.hob} Hob${details.hob > 1 && "s"}`
        : false,
      icon: <FaFireBurner />,
    },
    {
      prop: "microwave",
      value: Boolean(details.microwave) && `Microwave`,
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "gas",
      value: Boolean(details.gas) && `Gas`,
      icon: <BsFire />,
    },
    {
      prop: "water",
      value: Boolean(details.water) && `Water`,
      icon: <IoWaterOutline />,
    },
  ];
  return (
    <ul className={styles.detailsList}>
      {detailsArray
        .slice(0, length || detailsArray.length)
        .map(({ icon, value }, index) => (
          <li key={index} className={styles.detailItem}>
            {icon}
            {value}
          </li>
        ))}
    </ul>
  );
}
