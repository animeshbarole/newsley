//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavbarComp';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  
  Routes} from 'react-router-dom'

export default class App extends Component {
  pageSize = 9

state = {
  progress :0
}


setProgress = (progress) =>
{
  this.setState({
    progress :progress
  })
}

render() {
    return (
      
      <div>   
        <Router>
        <LoadingBar 
        color='#f11946'
        progress={this.state.progress}
        height = {3}
       
      />
         <NavBar/>
        
       
        <Routes>
        <Route exact path="/" element={<News setProgress = {this.setProgress} key="general" pageSize = {this.pageSize} country="in" category="general"/>} />
        <Route exact path="/home" element={<News setProgress = {this.setProgress} key="general" pageSize = {this.pageSize} country="in" category="general"/>} />
        
        <Route exact path="/sports" element={<News setProgress = {this.setProgress} key="sports" pageSize = {this.pageSize} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News setProgress = {this.setProgress} key="science" pageSize = {this.pageSize} country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize = {this.pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News setProgress = {this.setProgress} key="business" pageSize = {this.pageSize} country="in" category="business"/>} />
        <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" pageSize = {this.pageSize} country="in" category="technology"/>} />
        <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" pageSize = {this.pageSize} country="in" category="health"/>} />
      </Routes>
  
       

      </Router> 
    </div>

    )
  }
}