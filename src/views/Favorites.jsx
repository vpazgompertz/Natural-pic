import React, { useContext } from 'react';
import { PhotoContext } from '../context/Context';

const Favorites = () => {
  const { favorites } = useContext(PhotoContext);

  return (
    <div className='favorites'>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map(({ id, src }) => (
          <div key={id} className="gallery-item">
            <img src={src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

