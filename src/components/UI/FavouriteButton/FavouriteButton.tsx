import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

interface IFavouriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <button className="FavouriteButton" onClick={onClick}>
      {isFavorite ? <FaHeartBroken /> : <FaHeart />}
    </button>
  );
};

