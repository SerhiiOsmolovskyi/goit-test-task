import styles from "./VehicleDetails.module.css";

export default function VehicleDetails({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) {
  const addSpace = (string) => {
    return string.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2");
  };
  return (
    <>
      <div className={styles.vehicleDetailsContainer}>
        <h3 className={styles.title}>Vehicle details</h3>

        <ul className={styles.vehicleDetailsList}>
          <li className={styles.vehicleDetailsItem}>
            <p>Form</p>
            <p>{form}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Length</p>
            <p>{addSpace(length)}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Width</p>
            <p>{addSpace(width)}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Height</p>
            <p>{addSpace(height)}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Tank</p>
            <p>{addSpace(tank)}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
