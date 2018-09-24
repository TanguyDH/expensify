import React from 'react';
import FormExpense from '../../component/FormExpense/FormExpense';
import {connect} from 'react-redux';
import {editExpense, removeExpense} from '../../store/actions/expenses'; 

class EditExpensive extends React.Component{
    onSubmit = (expense) =>{
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    }
    removeExpense = () =>{
        this.props.removeExpense(this.props.match.params.id);
        this.props.history.push('/');
    }
    render(){
        console.log(this.props.expenseSelected);
        return(
            <div>
               <h1>Edit epxpense</h1>
               <FormExpense
                expense={this.props.expenseSelected[0]}
                onSubmit={this.onSubmit}
                 />
                 <button onClick={this.removeExpense}>Remove Expense</button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) =>{
   return{
       expenseSelected: state.expenses.filter((expense) =>{
           return expense.id === props.match.params.id;
       })

   }
}


const matDispatchToProps = dispatch =>{
    return {
         editExpense: (expense , id) =>  dispatch(editExpense(expense,id)),
         removeExpense: (id) => dispatch(removeExpense(id))
     };
}


export default connect(mapStateToProps,matDispatchToProps)(EditExpensive);