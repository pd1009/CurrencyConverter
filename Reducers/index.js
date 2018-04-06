import { combineReducers } from 'redux';
import amountReducer from './amount';

export default combineReducers({
    amount: amountReducer
});