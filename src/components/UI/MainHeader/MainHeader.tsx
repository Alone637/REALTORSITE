import React from "react";
import { MainHead } from "./MainHeader.style";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { FaDoorClosed } from "react-icons/fa";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const MainHeader = () => {
    return (
        <MainHead>
            <div className="Logo">
                <span className="logo1">Real</span>
                <span className="logo2">Estate</span>
            </div>
            <div className="buttons">
                <HeaderButton buttonLabel="Main" hreftext="/main" isPrimary />
                <HeaderButton buttonLabel="Settings" hreftext="/settings" isPrimary />
                <HeaderButton buttonLabel="Favourite" hreftext="/favourite" isPrimary />
            </div>
            <div className="LogOut">   
                <a  href="/"><span>LogOut</span><FaDoorClosed /></a>
            </div>
            <ToggleSwitch/>
        </MainHead>
    )
}