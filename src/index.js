import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import createHistory from "history/createBrowserHistory";
import { startSetExpenses } from './store/actions/expenses';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {login, logout} from './store/actions/auth';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReducerExpenses from './store/reducers/expenses';
import ReducerFilters from './store/reducers/filters';
import AuthReducer from './store/reducers/auth';
import {firebase} from './firebase/firebase';
import thunk from 'redux-thunk';

export const history = createHistory();

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  expenses: ReducerExpenses,
  filters: ReducerFilters,
  auth: AuthReducer
});

const store = createStore(
  rootReducer,
  composeEnhencers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);



let hasRendered = false;
const renderApp = () =>{
  if(!hasRendered){
    ReactDOM.render(app, document.getElementById("root"));
    hasRendered = true;
  }
}

ReactDOM.render(<p>...loading</p>, document.getElementById('root'));




registerServiceWorker();



firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    })
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
}) 