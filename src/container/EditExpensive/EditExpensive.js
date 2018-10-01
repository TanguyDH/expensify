import React from 'react';
import FormExpense from '../../component/FormExpense/FormExpense';
import {connect} from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../../store/actions/expenses'; 

class EditExpensive extends React.Component{
    onSubmit = (expense) =>{
        this.props.startEditExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    }
    removeExpense = () =>{
        this.props.startRemoveExpense(this.props.match.params.id);
        this.props.history.push("/dashboard");
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
        startEditExpense: (expense , id) =>  dispatch(startEditExpense(expense,id)),
         startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
     };
}


export default connect(mapStateToProps,matDispatchToProps)(EditExpensive);