import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => 
  (
    <>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div className="topnav_right">
          <a href="#search">Search</a>
          <a href="#about">About</a>
        </div>
      </div>  
    </>
  )

export default App
