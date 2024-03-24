import React, { useContext } from 'react';
import { PhotoContext } from '../context/Context';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { photo, setPhoto, favorites, setFavorites } = useContext(PhotoContext);

  const updateFavorite = (id) => {
    const updatedPhotos = photo.photos.map((item) =>
      item.id === id ? { ...item, photoFavorite: !item.photoFavorite } : item
    );
    setPhoto((prevPhoto) => ({ ...prevPhoto, photos: updatedPhotos }));

    const selectedPhoto = updatedPhotos.find((item) => item.id === id);
    const isFavorite = favorites.some((item) => item.id === id);

    setFavorites((prevFavorites) =>
      isFavorite ? prevFavorites.filter((item) => item.id !== id) : [...prevFavorites, selectedPhoto]
    );
  };

  const renderPhotos = () => {
    if (!photo || !photo.photos || photo.photos.length === 0) {
      return <div>No hay fotos</div>;
    }

    return photo.photos.map((item) => (
      <div
        key={item.id}
        className="photo"
        style={{ backgroundImage: `url(${item.src.tiny})` }}
        onClick={() => updateFavorite(item.id)}
      >
        <IconHeart filled={item.photoFavorite} />
      </div>
    ));
  };

  return <div className="gallery grid-columns-5 p-3">{renderPhotos()}</div>;
};

export default Gallery;
