import React from "react";
import './Toolbar.css';
import { ToolbarData } from "../../Helper/ToolbarData";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <ul className="toolbar-list">
                {ToolbarData.map((value, key) => (
                    <li className="toolbar-row" key={key} 
                        onClick={() => {
                            console.log(value);
                    }}>
                        <div className="toolbar-row-icon">{value.icon}</div>
                        {/* <div className="toolbar-row-name">{value.name}</div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Toolbar;