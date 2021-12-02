// src/App.js
import axios from 'axios'
import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails"
import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries`).then((response)=>{
            setCountries(response.data)
        }).catch(err=>console.log)
    },[])

  return(
    <div className="App">
    <Navbar />

    <div className="container">
    <div className="row">
    <Router>
    <Route path={"/"} render={(props)=><CountriesList {...props} countries={countries} />} />
    <Route path={"/:id"} render={(props)=><CountryDetails {...props} countries={countries} />} />
    </Router>
    </div>
    </div>
    </div>
  ) 
}
export default App;
