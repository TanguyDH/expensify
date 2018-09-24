import React from 'react';
import FormExpense from "../../component/FormExpense/FormExpense";
import {connect} from 'react-redux';
import {addExpense} from '../../store/actions/expenses';


class CreateExpensive extends React.Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
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
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}


export default connect(null, mapDispatchToProps)(CreateExpensive);