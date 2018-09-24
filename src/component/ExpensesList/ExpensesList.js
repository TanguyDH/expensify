import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import expensesSelectors from '../../selectors/expenses';

const ExpensesList = (props) =>{
    return (
        <div>
          {props.expenses.map(expense =>{
                 return  <ExpensesListItem key={expense.id} {...expense} />
          })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
         expenses: expensesSelectors(state.expenses, state.filters) 
    };
}



export default connect(mapStateToProps)(ExpensesList);