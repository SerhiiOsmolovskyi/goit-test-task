import CamperListItem from "../CamperListItem/CamperListItem";
import styles from "../CamperList/CamperList.module.css";

export default function CampersList({ campers }) {
  return (
    <>
      <ul className={styles.camperList}>
        {campers.map((camper) => {
          return <CamperListItem key={camper._id} {...camper}></CamperListItem>;
        })}
      </ul>
    </>
  );
}
