import { FaRegHeart } from "react-icons/fa";
import styles from "./CamperListItem.module.css";
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/campers/selectors";
import { addFavorite, removeFavorite } from "../../redux/campers/slice";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import CamperDetailsModal from "../CamperDetailsModal/CamperDetailsModal";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";

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
                <p className={styles.price}>&euro;{price.toFixed(2)}</p>
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
                <FaStar className={styles.starIcon} />
                {rating} ({reviews.length} Reviews)
              </p>
              <p className={styles.location}>
                <GrLocation className={styles.geoIcon} />
                {location.split(", ").reverse().join(", ")}
              </p>
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <OptionsList camper={camper} length={6}></OptionsList>
          <Button onClick={() => setIsModalOpen(true)} text={"Show more"} />
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
