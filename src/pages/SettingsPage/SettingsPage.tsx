import React from "react";
import { MainHeader } from "../../components/UI/MainHeader/MainHeader";
import './SettingsPage.scss'

export const SettingsPage = () => {
    return (

        <div>
            <MainHeader />
            <div className="container">
                <div className="outer">
                    <div className="Profiler">
                        <p>Profile</p>
                    </div>
                    <div className="content">
                       
                        <div className="image-box">
                            <img src={require("../../components/random.jpg")} alt="" />
                        </div>
                        <div className="details">
                            <div className="name">User</div>
                            <div className="number">Number: +99899-440-72-06</div>
                            <div className="password">Password: *********</div>
                            <div className="buttons">
                                <button>Change Password</button>
                                <button>Change name</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}