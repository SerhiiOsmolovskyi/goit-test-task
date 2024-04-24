import { FaRegHeart } from "react-icons/fa";
import styles from "./CamperListItem.module.css";
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
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
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/campers/selectors";
import { addFavorite, removeFavorite } from "../../redux/campers/slice";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import CamperDetailsModal from "../CamperDetailsModal/CamperDetailsModal";

export default function CamperListItem({
  _id,
  name,
  price,
  rating,
  location,
  adults,
  children,
  engine,
  transmission,
  form,
  length,
  width,
  height,
  tank,
  consumption,
  description,
  details,

  gallery,
  reviews,
}) {
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
      value: details.bathroom,
      icon: <FaBath />,
    },
    {
      prop: "shower",
      value: Boolean(details.shower) && `Shower`,
      icon: <LuShowerHead />,
    },
    {
      prop: "kitchen",
      value: Boolean(details.kitchen),
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
      value: Boolean(details.TV),
      icon: <CgTv />,
    },
    {
      prop: "CD",
      value: Boolean(details.CD),
      icon: <LuDisc3 />,
    },
    {
      prop: "radio",
      value: Boolean(details.radio),
      icon: <HiOutlineRadio />,
    },
    {
      prop: "toilet",
      value: Boolean(details.toilet),
      icon: <TbToiletPaper />,
    },
    {
      prop: "freezer",
      value: Boolean(details.freezer),
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "hob",
      value: details.hob
        ? `${details.hob} bed${details.hob > 1 && "s"}`
        : false,
      icon: <FaFireBurner />,
    },
    {
      prop: "microwave",
      value: Boolean(details.microwave),
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "gas",
      value: Boolean(details.gas),
      icon: <BsFire />,
    },
    {
      prop: "water",
      value: Boolean(details.water),
      icon: <IoWaterOutline />,
    },
  ];
  const camper = {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  };
  const favoriteCampers = useSelector(selectFavorite);
  const [isFavorite, setIsFavorite] = useState(
    Boolean(favoriteCampers.find((item) => item._id === _id))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    isFavorite
      ? (dispatch(removeFavorite(_id)), setIsFavorite(false))
      : dispatch(addFavorite(camper), setIsFavorite(true));
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.listItem}>
        <img className={styles.listItemImg} src={gallery[0]} alt={name} />
        <div className={styles.itemContent}>
          <div className={styles.listItemTop}>
            <div className={styles.listItemHeader}>
              <h2 className={styles.title}>{name}</h2>
              <div className={styles.priceContainer}>
                <p className={styles.price}>&euro;{price}</p>
                <button
                  onClick={handleToggleFavorite}
                  className={styles.favoriteButton}
                >
                  {!isFavorite ? (
                    <FaRegHeart className={styles.favoriteIcon} />
                  ) : (
                    <FaHeart className={styles.selectedFavoriteIcon} />
                  )}
                </button>
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.reviews}>
                <FaStar className={styles.icon} />
                {rating} ({reviews.length} Reviews)
              </p>
              <p>
                <GrLocation className={styles.icon} />
                {location.split(", ").reverse().join(", ")}
              </p>
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <ul className={styles.detailsList}>
            {detailsArray.slice(0, 6).map(({ icon, value }, index) => (
              <li key={index} className={styles.detailItem}>
                {icon}
                {value}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsModalOpen(true)}
            className={styles.showMoreButton}
          >
            Show more
          </button>
        </div>
        {isModalOpen && (
          <CamperDetailsModal
            isOpen={isModalOpen}
            handleClose={handleClose}
            data={camper}
          />
        )}
      </li>
    </>
  );
}
