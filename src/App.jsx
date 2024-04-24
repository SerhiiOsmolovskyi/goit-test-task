import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
function App() {
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
