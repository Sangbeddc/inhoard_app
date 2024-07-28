import React from "react";
import './Toolbar.css';
import { ToolbarData } from "../../Helper/ToolbarData";
import { useDispatch } from "react-redux";
import { setPage } from "../../Redux/Action";

const Toolbar = () => {
    const dispatcher = useDispatch();
    return (
        <div className="toolbar">
            <ul className="toolbar-list">
                {ToolbarData.map((value, key) => (
                    <li className="toolbar-row" key={key} 
                        onClick={() => {
                            console.log(value);
                            dispatcher(setPage(value.page));
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