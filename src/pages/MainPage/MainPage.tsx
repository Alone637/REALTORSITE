import { Card } from "../../components/UI/Card/Card";
import "./MainPage.scss"
import { useGetAllHomesQuery } from "../../store/api/RealtorApi";
import { MainHeader } from "../../components/UI/MainHeader/MainHeader";
import { FaSearch } from "react-icons/fa";

export const MainPage = () => {

    // const {data, isLoading, error} = useGetAllHomesQuery('santa monica')

    return(
            <div>
                {/* {isLoading && <Loader /> */}
                <MainHeader/>
                <div className="Body">
                    <div className="secondaryBody">
                        <div className="InputBody">
                            <div className="Boder">
                                <input type="text" placeholder="Search anything you want..." className="SearchInput"/>
                                <div className="btn">
                                    <a href="#"><FaSearch /></a>
                                </div>
                            </div>
                        </div>
                        <Card />
                    </div>
                </div>
            </div>
    )
}