import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReducerExpenses from './store/reducers/expenses';
import ReducerFilters from './store/reducers/filters';


import {addExpense} from './store/actions/expenses';


const rootReducer = combineReducers({
  expenses: ReducerExpenses,
  filters: ReducerFilters
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);




 store.subscribe(() => console.log(store.getState()));


 store.dispatch(addExpense({description:'sisi', amount:'3'}));
 store.dispatch(addExpense({ description: 'lol', amount: '55' }));









ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
