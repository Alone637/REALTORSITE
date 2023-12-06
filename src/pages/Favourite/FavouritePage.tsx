import React, { useState } from "react";


import "./FavouritePage.scss";
import { Card } from "../../components/UI/Card/Card";

interface ICardProps {
  id: number;
  bed: number;
  bath: number;
  location: string;
  sqft: number;
  cost: number;
  src: string;
}

const FavouritePage: React.FC = () => {
  const [cards, setCards] = useState<ICardProps[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const addCard = () => {
    const newCard: ICardProps = {
      id: Math.random(),
      bed: 2,
      bath: 2,
      location: "Sample Location",
      sqft: 1500,
      cost: 300000,
      src: "https://example.com/sample-image.jpg",
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  const addToFavorites = (cardId: number) => {
    setFavorites((prevFavorites) => [...prevFavorites, cardId]);
  };

  const removeFromFavorites = (cardId: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== cardId));
  };

  return (
    <div className="FavouritePage">
      <h1>Favourite Homes</h1>
      <button onClick={addCard}>Add Card</button>
      <div className="CardList">
        {cards.map((card, index) => (
          <div key={card.id} className="CardContainer">
            <Card
              id={card.id}
              src={card.src}
              bed={card.bed}
              bath={card.bath}
              location={card.location}
              sqft={card.sqft}
              cost={card.cost}
              onAddToFavourites={addToFavorites}
              onRemoveFromFavourites={removeFromFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
