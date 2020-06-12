import React, { Component} from "react";
import { hot } from "react-hot-loader/root";
import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";

import "./App.css";
import 'reset-css';

class App extends Component{
  render(){
    return(
        <div className="App">
            <HeaderBar />
            <SearchBar />
            <h1> Hola HOLA Hello, Wokjashdklahdarld! </h1>
        </div>
    );
  }
}

export default hot(App);
