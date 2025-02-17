import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
