import { useSelector } from "react-redux";
import CampersList from "../../components/CamperList/CamperList";
import { selectFavorite } from "../../redux/campers/selectors";

export default function FavoritePage() {
  const favoriteCampers = useSelector(selectFavorite);
  return (
    <section>
      <CampersList campers={favoriteCampers} />
    </section>
  );
}
