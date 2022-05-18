import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/profile/Profile'
import Dashboard from './components/admin/Dashboard'
import Products from './components/products/Products';

// Redux
import {Provider} from 'react-redux'
import store from './store'
import Product from "./components/layout/productSection/Product";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/products' component={Products}/>
          <Switch>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/admin' component={Dashboard}/>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
