import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import './Page.css';
//import { getPageHeight } from "../../Helper/ComponentHelper";

const Page = () => {
    //const pageHeight = getPageHeight();
    return <div className="page">
        <Toolbar />
        <div></div>
    </div>;
};

export default Page;