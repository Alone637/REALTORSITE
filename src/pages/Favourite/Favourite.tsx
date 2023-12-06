import "./Favourite.scss"
import { MainHeader } from "../../components/UI/MainHeader/MainHeader";
import { FaSearch } from "react-icons/fa";

export const Favourite = () => {
    return(
            <div>
                <MainHeader/>
                <div className="Body">
                    <div className="secondaryBody">
                        <div className="InputBody">
                            <div className="Boder">
                                <div className="btn">
                                    <a href="#"><FaSearch /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}