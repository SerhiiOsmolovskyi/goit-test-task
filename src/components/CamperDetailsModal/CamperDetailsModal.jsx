import Modal from "react-modal";
import styles from "./CamperDetailsModal.module.css";
import BookForm from "../BookForm/BookForm";

import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import { useState } from "react";
import OptionsList from "../OptionsList/OptionsList";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { MdClose } from "react-icons/md";

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
          <button
            type="button"
            onClick={handleClose}
            className={styles.closeButton}
          >
            <MdClose className={styles.closeIcon} />
          </button>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.info}>
            <p className={styles.reviews}>
              <FaStar className={styles.starIcon} />
              {rating} ({reviews.length} Reviews)
            </p>
            <p>
              <GrLocation className={styles.icon} />
              {location.split(", ").reverse().join(", ")}
            </p>
          </div>
          <p className={styles.price}>&euro;{price.toFixed(2)}</p>
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
                  className={activeTab === "features" ? styles.activeLink : ""}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("reviews");
                  }}
                  className={activeTab === "reviews" ? styles.activeLink : ""}
                >
                  Reviews
                </button>
              </li>
            </ul>
            {activeTab === "reviews" && (
              <div className={styles.reviewContainer}>
                <ul className={styles.reviewLeftContainer}>
                  {reviews.map(
                    ({ reviewer_name, reviewer_rating, comment }, index) => (
                      <li key={index}>
                        <div className={styles.reviewTopContainer}>
                          <span className={styles.avatarContainer}>
                            <p className={styles.avatarText}>
                              {reviewer_name[0]}
                            </p>
                          </span>
                          <div className={styles.reviewRightContainer}>
                            <p>{reviewer_name}</p>
                            <span className={styles.raitingLine}>
                              {[...Array(reviewer_rating)].map((_, index) => (
                                <FaStar
                                  key={index}
                                  className={styles.starIcon}
                                />
                              ))}
                            </span>
                          </div>
                        </div>
                        <p className={styles.comment}>{comment}</p>
                      </li>
                    )
                  )}
                </ul>
                <BookForm />
              </div>
            )}
            {activeTab === "features" && (
              <>
                <div className={styles.modalBottomContainer}>
                  <div className={styles.modalBottomContainerLeft}>
                    <OptionsList camper={camper} />
                    <VehicleDetails
                      form={form}
                      length={length}
                      width={width}
                      height={height}
                      tank={tank}
                      consumption={consumption}
                    />
                  </div>

                  <BookForm />
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </Modal>
  );
}
