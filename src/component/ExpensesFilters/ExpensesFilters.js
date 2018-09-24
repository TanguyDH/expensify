import React from 'react';
import {setTextFilter} from '../../store/actions/filters';
import {connect} from 'react-redux';
import { DateRangePicker } from "react-dates";
import {setStartDate, setEndDate} from '../../store/actions/filters';

class ExpensesFilters extends React.Component {
  state = {
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusedInput) =>{
    this.setState(() => ({
      focusedInput
    }))
  }

  onChange = e => {
    const text = e.target.value;
    this.props.setText(text);
  };

  render() {
    return (
      <div>
          <input
            type="text"
            placeholder="search..."
            onChange={this.onChange}
            value={this.props.filtersText}
          />

        <DateRangePicker
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
    return{
        setText: (text) => dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}
const mapStateToProps = state =>{
    return{
        filtersText: state.filters.text,
        startDate: state.filters.startDate,
        endDate: state.filters.endDate
    }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesFilters);