import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { startSetExpenses } from './store/actions/expenses';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReducerExpenses from './store/reducers/expenses';
import ReducerFilters from './store/reducers/filters';
import './firebase/firebase';
import thunk from 'redux-thunk';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  expenses: ReducerExpenses,
  filters: ReducerFilters
});

const store = createStore(
  rootReducer,
  composeEnhencers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(<p>...loading</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() =>{
  ReactDOM.render(app, document.getElementById("root"));
})


registerServiceWorker();
