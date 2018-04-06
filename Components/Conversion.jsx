import React from 'react';
import ActionTypes from "../constants"
import * as actions from "../Actions/actions"
import { connect } from 'react-redux'

class Conversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // originAmount: 0.0,
            // toAmount: 0.0,
            // originCurr: 'EUR',
            // toCurr: 'EUR'
        }

        this.handleOriginAmountChange = this.handleOriginAmountChange.bind(this);
        this.handleDestAmountChange = this.handleDestAmountChange.bind(this);
        this.handleOriginCurrencyChange = this.handleOriginCurrencyChange.bind(this);
        this.handleToCurrencyChange = this.handleToCurrencyChange.bind(this);
    }

    handleOriginCurrencyChange(event){
        // this.handleToAmountChange(this.props.originAmount, this.state.toCurr, event.target.value);
        // this.setState({originCurr: event.target.value});
        this.props.dispatch(actions.updateOriginCurrAction(event.target.value));
    }

    handleToCurrencyChange(event) {
        // this.handleToAmountChange(this.props.originAmount, event.target.value, this.state.originCurr);
        // this.setState({toCurr: event.target.value});

        this.props.dispatch(actions.updateToCurrAction(event.target.value));

    }

    handleOriginAmountChange(event)
    {
        this.props.dispatch(actions.updateOriginAmountAction(event.target.value));
       // this.setState({originAmount: event.target.value});
       // this.handleToAmountChange(event.target.value, this.state.toCurr, this.state.originCurr);
    }

    handleDestAmountChange(event)
    {
        this.props.dispatch(actions.updateDestAmountAction(event.target.value));
       // this.setState({originAmount: event.target.value});
       // this.handleToAmountChange(event.target.value, this.state.toCurr, this.state.originCurr);
    }

   render() {
      return (
         <div>
            Currency Converter
            <div>
                <label>Convert</label>
                <input type="text" value={this.props.originAmount} onChange={this.handleOriginAmountChange}/>
                <select value={this.props.originCurr} onChange={this.handleOriginCurrencyChange}>
                    <option>EUR</option>
                    <option>INR</option>
                    <option>DLR</option>
                </select>
                <label>to</label>
                <input type="text" value={this.props.toAmount} onChange={this.handleDestAmountChange}/> 
                <select value={this.props.toCurr} onChange={this.handleToCurrencyChange}>
                    <option>EUR</option>
                    <option>INR</option>
                    <option>DLR</option>
                </select>
            </div>
         </div>
      );
   }
}
export default connect((state, props) => {
    return {
        originAmount: state.amount.originAmount,
        toAmount: state.amount.toAmount,
        originCurr: state.amount.originCurr,
        toCurr: state.amount.toCurr
    }
})(Conversion);