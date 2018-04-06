import ActionTypes from "../constants"

export function updateOriginAmountAction(amount) {
    return {
        type: ActionTypes.CHANGE_ORIGIN_AMOUNT,
        data: {newAmount: amount}
    };
}

export function updateDestAmountAction(amount) {
    return {
        type: ActionTypes.CHANGE_DEST_AMOUNT,
        data: {newAmount: amount}
    };
}

export function updateOriginCurrAction(curr) {
    /*return {
        type: ActionTypes.CHANGE_ORIGIN_CURR,
        data: {newOriginCurr: curr}
    };*/

    return (dispatch) => {
        setTimeout(()=>{
            dispatch({
                type: ActionTypes.CHANGE_ORIGIN_CURR,
                data: {newOriginCurr: curr}
            })
        }, 5000);  
    }
}

export function updateToCurrAction(curr) {
    return {
        type: ActionTypes.CHANGE_TO_CURR,
        data: {newToCurr: curr}
    };
}