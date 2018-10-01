import React from 'react';
import FormExpense from "../../component/FormExpense/FormExpense";
import {connect} from 'react-redux';
import { startAddExpense} from '../../store/actions/expenses';


class CreateExpensive extends React.Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <div>
                <FormExpense onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return { startAddExpense: expense => dispatch(startAddExpense(expense)) };
}


export default connect(null, mapDispatchToProps)(CreateExpensive);