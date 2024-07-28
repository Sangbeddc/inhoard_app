import React from "react";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { INVENTORY } from "../Redux/Constants";

export const ToolbarData = [
    {
        name: "Inventory",
        icon: <Inventory2OutlinedIcon />,
        page: INVENTORY
    },
    {
        name: "About",
        icon: <AssessmentOutlinedIcon />,
    },
    {
        name: "Projects",
        icon: <ReceiptLongOutlinedIcon />,
    },
    {
        name: "Contact",
        icon: <ReceiptLongOutlinedIcon />,
    }
]