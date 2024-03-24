import React, { createContext, useState, useEffect } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./photos.json");
        const data = await response.json();
        setPhoto(data);
      } catch (error) {
        console.error("Error al obtener las fotos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PhotoContext.Provider value={{ photo, setPhoto, favorites, setFavorites }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
