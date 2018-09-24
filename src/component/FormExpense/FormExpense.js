import React from 'react';
import {
  SingleDatePicker
} from "react-dates";
import moment from 'moment';

class FormExpense extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    amount: this.props.expense ? (this.props.expense.amount).toString() : "",
    note: this.props.expense ? this.props.expense.note : "",
    createdAt:this.props.expense ?  moment(this.props.expense.createdAt) :  moment(),
    focused: null,
    error: null
  };

  onChangeDescription = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onChangeAmount = e => {
    const amount = e.target.value;
    this.setState(() => ({
      amount
    }));
  };

  onChangeNote = e => {
    const note = e.target.note;
    this.setState(() => ({
      note
    }));
  };
  onSubmit = (e) =>{
      e.preventDefault();

      if(!this.state.description || !this.state.amount){
          this.setState(() =>({
              error: 'fill out description and amount!!'
          }))
      }else{
          this.setState(() =>({
              error: null
          }))
          this.props.onSubmit({
              description: this.state.description, 
              note: this.state.note,
              amount: parseFloat(this.state.amount,10),
              createdAt: this.state.createdAt.valueOf()
          })
      }
  }

  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            onChange={this.onChangeDescription}
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="amount"
            onChange={this.onChangeAmount}
            value={this.state.amount}
          />
          <textarea
            type="text"
            placeholder="tape a note here (optional)"
            onChange={this.onChangeNote}
            value={this.state.note}
          ></textarea>

            <SingleDatePicker
              date={this.state.createdAt} // momentPropTypes.momentObj or null
              onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired,
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}


export default FormExpense;