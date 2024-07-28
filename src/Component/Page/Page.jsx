import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import './Page.css';
import BaseContainer from "../BaseContainer/BaseContainer";
//import { getPageHeight } from "../../Helper/ComponentHelper";

const Page = () => {
    //const pageHeight = getPageHeight();
    return <div className="page">
        <Toolbar />
        <BaseContainer />
    </div>;
};

export default Page;