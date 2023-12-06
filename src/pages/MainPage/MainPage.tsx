import { Card } from "../../components/UI/Card/Card";
import "./MainPage.scss"
import { useGetAllHomesQuery } from "../../store/api/RealtorApi";
import { MainHeader } from "../../components/UI/MainHeader/MainHeader";
import { FaSearch } from "react-icons/fa";
import { Loader } from "../../components/Loader/Loader";

export const MainPage = () => {

    const { data, isLoading, error } = useGetAllHomesQuery('santa monica')

    const homes = data?.home_search?.results

    return (
        <div>
            {isLoading && <Loader />}
            <MainHeader />
            <div className="Body">
                <div className="secondaryBody">
                    <div className="InputBody">
                        <div className="Boder">
                            <input type="text" placeholder="Search anything you want..." className="SearchInput" />
                            <div className="btn">
                                <a href="#"><FaSearch /></a>
                            </div>
                        </div>
                    </div>
                    <h1>Homes for sale</h1>
                    {homes && homes.map((elem: { description: { beds: number; baths: number; lot_sqft: number; }; list_price: number; primary_photo: any}) => (
                        <Card src={elem.primary_photo?.href} bed={elem.description.beds} bath={elem.description.baths} location={"Santa monica"} sqft={elem.description.lot_sqft} cost={elem.list_price} />
                    ))}

                </div>
            </div>
        </div>
    )
}