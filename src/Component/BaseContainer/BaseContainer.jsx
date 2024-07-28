import React from "react";
import { useSelector } from "react-redux";
import HomePage from "./HomePage";
import { HOME_PAGE, INVENTORY } from "../../Redux/Constants";
import InventoryPage from "./InventoryPage";

 const BaseContainer = (props) => {

    const page = useSelector((state) => state.activePage);
    //const page = "Not Yet";

    return (
            <div className="BaseContainer">
                {setPageHelper(page)}
            </div>
    );
 }

 const setPageHelper = (page) => {
    switch (page){
        case HOME_PAGE:
            return <HomePage />;
        case INVENTORY:
            return <InventoryPage />;
        default:
            return <div>Not Yet</div>;
    }
 }

 export default BaseContainer;