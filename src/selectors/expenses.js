import moment from 'moment';


export default (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter(expense =>{
        const filterByText = expense.description.toLowerCase().includes(text.toLowerCase());
        const filterByStartDate = startDate ? moment(expense.createdAt).isSameOrAfter(startDate) : true;
        const filterByEndDate = endDate ? moment(expense.createdAt).isSameOrBefore(endDate) : true;
        return filterByText && filterByStartDate && filterByEndDate;
    }).sort((a,b) =>{
        if(sortBy === "date"){
            return a.createdAt > b.createdAt ? -1 : 1;
        }else if (sortBy === "amount"){
            return a.amount > b.amount ? -1 : 1;
        }
    })
}