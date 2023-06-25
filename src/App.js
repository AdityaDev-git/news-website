// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,
} from "react-router-dom";

const App = ()=> {
  const pageSize = 8;
  const apiKey = '800af07f21ce4f8199c9bf5bb0effb41'
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}/>
        <Routes>
          <Route exact path="/business" element= {<News setProgress={setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} category="business"/>}/> 
          <Route exact path="/entertainment" element= {<News setProgress={setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} category="entertainment"/>}/> 
          <Route exact path="/general" element= {<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} category="general"/>}/> 
          <Route exact path="/health" element= {<News setProgress={setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} category="health"/>}/> 
          <Route exact path="/science" element= {<News setProgress={setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} category="science"/>}/> 
          <Route exact path="/sports" element= {<News setProgress={setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} category="sports"/>}/> 
          <Route exact path="/technology" element= {<News setProgress={setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} category="technology"/>}/> 
        </Routes>
        </Router>
      </div>
    )
  }
  export default App
    //   business entertainment general health science sports technology
