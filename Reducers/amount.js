import  ActionTypes from "../constants";

var defaultState = {
    originAmount: 0.0,
    toAmount: 0.0,
    originCurr: 'EUR',
    toCurr: 'EUR'

};

function amountReducer(state = defaultState, action) {
    if(action.type === ActionTypes.CHANGE_ORIGIN_AMOUNT) {
        // Object.assign({}, state, { originAmount: action.data });
        return {
            ...state,
            originAmount: action.data.newAmount,
            toAmount: updateAmount(action.data.newAmount, state.originCurr, state.toCurr, true)
        }
    }
    else if(action.type === ActionTypes.CHANGE_DEST_AMOUNT) {
        return {
            ...state,
            toAmount: action.data.newAmount,
            originAmount: updateAmount(action.data.newAmount, state.originCurr, state.toCurr, false)
        }
    }
    else if(action.type === ActionTypes.CHANGE_ORIGIN_CURR) {
        return {
            ...state,
            originCurr: action.data.newOriginCurr,
            toAmount: updateAmount(state.originAmount, action.data.newOriginCurr, state.toCurr, true)
        }
    }
    else if(action.type === ActionTypes.CHANGE_TO_CURR) {
        return {
            ...state,
            toCurr: action.data.newToCurr,
            toAmount: updateAmount(state.originAmount, state.originCurr, action.data.newToCurr, true)
        }
    }

    return state;
}

function updateAmount(amount, originCurr, toCurr, updateTo) {
        if(toCurr !== originCurr) {
            if(originCurr === "EUR") {
                if(toCurr === "INR") {
                    if (updateTo) {
                        amount = amount * 100;
                    }
                    else {
                        amount = amount / 100;
                    }
                    
                }
                else if (toCurr === "DLR") {
                    if (updateTo) {
                        amount = amount * 1.4;
                    }
                    else {
                        amount = amount / 1.4;
                    }
                }
            }
            if(originCurr === "INR") {
                if(toCurr === "EUR") {
                    if (updateTo) {
                        amount = amount / 100;
                    }
                    else {
                        amount = amount * 100;
                    }
                }
                else if (toCurr === "DLR") {
                    if (updateTo) {
                        amount = amount / 64;
                    }
                    else {
                        amount = amount * 64;
                    }
                }
            }
            if(originCurr === "DLR") {
                if(toCurr === "INR") {
                    if (updateTo) {
                        amount = amount * 64;
                    }
                    else {
                        amount = amount / 64;
                    }
                }
                else if (toCurr === "EUR") {
                    if (updateTo) {
                        amount = amount / 1.4;
                    }
                    else {
                        amount = amount * 1.4;
                    }
                }
            }
        }
    
    return amount;
}

export default amountReducer;
