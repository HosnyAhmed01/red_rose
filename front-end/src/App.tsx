import {useState } from 'react'
import {  Route , Routes,  } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Dates from './components/ourworks/Dates';
import Home from './components/shelf/Home';


function App() {  
  const [logedIn , setLogeIn] = useState(false);
 



  return (
     <div className="App">
        <div className="container">
        <Header />
   
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' ></Route>
            <Route path='/dates' element={<Dates />}/>
          </Routes>
        </div>
    </div>
  )
}

export default App
