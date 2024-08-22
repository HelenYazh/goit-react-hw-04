import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(
        ({
          alt_description,
          id,
          urls: { small, regular },
          likes,
          description,
        }) => {
          return (
            <li key={id} className={css.galleryItem}>
              <ImageCard
                alt={alt_description}
                smallImg={small}
                modalImg={regular}
                likes={likes}
                title={description}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ImageGallery;
