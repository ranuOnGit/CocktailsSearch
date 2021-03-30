import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import SingleCocktail from './components/singleCocktail/SingleCocktail'
import Error from './components/error/Error'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/cocktail/:idDrink'><SingleCocktail /></Route>
        <Route path='*'><Error /></Route>
      </Switch>
    </Router>
  );
}

export default App

