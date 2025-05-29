import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
    console.log("MainContent rendered!");
    return (
        <div className="main-content">

            <div>

                <Outlet />
            </div>
        </div>
    );
};

export default MainContent;
