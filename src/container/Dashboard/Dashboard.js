import React from "react";
import ExpensesList from '../../component/ExpensesList/ExpensesList';
import ExpensesFilters from '../../component/ExpensesFilters/ExpensesFilters';

const Dashboard = () => (
  <div>
    <ExpensesFilters />
    <ExpensesList />
  </div>
);
export default Dashboard;
