import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../../redux/campers/operations";
import {
  selectError,
  selectIsLoading,
  selectItems,
} from "../../redux/campers/selectors";
import CamperList from "../../components/CamperList/CamperList";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectItems);
  const dispatch = useDispatch();
  const onIncrementPege = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    dispatch(getAllCampers({ page }));
  }, [dispatch, page]);
  return (
    <section className={styles.section}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {Array.isArray(campers) && campers.length > 0 && (
        <CamperList campers={campers}></CamperList>
      )}
      <button className={styles.button} type="button" onClick={onIncrementPege}>
        Load more
      </button>
    </section>
  );
}
