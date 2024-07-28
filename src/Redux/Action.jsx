export const setPage = (page) => {
    return (dispatch) => {
        dispatch({
            type: "changePage",
            payload: page
        })
    }
}