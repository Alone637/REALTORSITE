import { constants } from 'fs'
import './Card.scss'
import { FavouriteButton } from '../FavouriteButton/FavouriteButton';

interface ICardProps {
	id: number;
	bed: number
	bath: number
	location: string
	sqft: number
	cost: number
	src: string
	onAddToFavourites: (id: number) => void;
  	onRemoveFromFavourites: (id: number) => void;
}

export const Card = ({ id, bed, bath, location, sqft, cost, src, onAddToFavourites, onRemoveFromFavourites }: ICardProps) => {
	return (
		<div className="wrapper">
			<div className="cols">
				<div className="col">
					<div className="container">
						<div className="front" style={{backgroundImage: `url(${src})`}}>
							<div className="inner">
								<span>{location}</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
								<p>
									{bed} bed
								</p>
								<p>
									{bath} bath
								</p>
								<p>
									{sqft} sqft
								</p>
								<p>
									{cost}$
								</p>
								<FavouriteButton
         						isFavorite={false}
          						onClick={() => {
            					onAddToFavourites(id);
          						}}
        						/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
