import React from "react";
import ExpensesList from '../../component/ExpensesList/ExpensesList';
import ExpensesFilters from '../../component/ExpensesFilters/ExpensesFilters';
import ExpensesSummary from '../../component/ExpensesSummary/ExpensesSummary';

const Dashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpensesFilters />
    <ExpensesList />
  </div>
);
export default Dashboard;
