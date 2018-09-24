import React from 'react';
import {connect} from 'react-redux'
import expensesSelectors from '../../selectors/expenses';
import getAmount from '../../selectors/expenses-total';
import numeral from 'numeral';

class ExpensesSummary extends React.Component{

    

    render(){
        const expenseWord = this.props.expenses.length === 0 ? 'expense' : 'expenses';
        const formatExpenseTotal = numeral(this.props.amount).format('$0,0.00');
        return(
            <div>
              <h1>Vieuwing {this.props.expenses.length} {expenseWord} totalling {formatExpenseTotal}</h1>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        amount: getAmount(expensesSelectors(state.expenses,state.filters)),
        expenses: expensesSelectors(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpensesSummary);