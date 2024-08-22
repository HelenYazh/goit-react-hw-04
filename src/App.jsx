import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotosByKeyword } from "./photos-api";

function App() {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (keyword) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchPhotosByKeyword(keyword);
      setPhotos(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {photos !== null && <ImageGallery photos={photos} />}
      {photos !== null && <LoadMoreBtn onClick={onLoadMore} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal />
    </div>
  );
}

export default App;
