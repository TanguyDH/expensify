


export default (expenses) =>{
    return expenses
    .map(expense =>{
        return expense.amount;
    })
    .reduce((acc, curr) =>{
        return acc + curr;
    },0)
}