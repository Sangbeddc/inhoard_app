import { HOME_PAGE } from "./Constants";
const initialState = {
    activePage: HOME_PAGE,
};

export const changePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "changePage":
            return {
                ...state,
                activePage: action.payload,
            };
        default:
            return state;
    }
}