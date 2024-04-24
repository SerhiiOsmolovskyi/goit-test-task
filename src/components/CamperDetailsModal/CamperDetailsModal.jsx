import Modal from "react-modal";
import styles from "./CamperDetailsModal.module.css";
import BookForm from "../BookForm/BookForm";

import { FaRegHeart } from "react-icons/fa";
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

Modal.setAppElement("#root");

export default function CamperDetailsModal({
  isOpen,
  handleClose,
  data: {
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
  },
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
  const [activeTab, setActiveTab] = useState("features");
  return (
    <Modal
      className={styles.modalContainer}
      contentLabel="Modal window with camper details"
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName={styles.overlay}
    >
      <>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>{name}</h2>
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
          <p className={styles.price}>&euro;{price}</p>
          <ul className={styles.imageContainer}>
            {gallery.map((url, index) => {
              return (
                <li key={index}>
                  <img className={styles.detailsImg} src={url} alt={name} />
                </li>
              );
            })}
          </ul>
          <p className={styles.description}>{description}</p>
          <div>
            <ul className={styles.modalLink}>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("features");
                  }}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("reviews");
                  }}
                >
                  Reviews
                </button>
              </li>
            </ul>
            {activeTab === "reviews" && (
              <div>
                <ul>
                  {reviews.map(
                    ({ reviewer_name, reviewer_rating, comment }, index) => (
                      <li key={index}>
                        <div>
                          <span>{reviewer_name[0]}</span>
                          <p>{reviewer_name}</p>
                          {/* Тут мають бути зірочки */}
                        </div>
                        <p>{comment}</p>
                      </li>
                    )
                  )}
                </ul>
                <BookForm />
              </div>
            )}
          </div>
        </div>
      </>
    </Modal>
  );
}
