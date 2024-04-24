import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../../redux/campers/operations";
import {
  selectError,
  selectIsLoading,
  selectItems,
} from "../../redux/campers/selectors";
import CamperList from "../../components/CamperList/CamperList";

export default function CatalogPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);
  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {Array.isArray(campers) && campers.length > 0 && (
        <CamperList campers={campers}></CamperList>
      )}
    </section>
  );
}
