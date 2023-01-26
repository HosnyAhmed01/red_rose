import {useState } from 'react'
import {  Route , Routes,  } from 'react-router-dom';
import './App.css'
import About from './components/about/About';
import Header from './components/Header'
import Dates from './components/ourworks/Dates';
import Home from './components/shelf/Home';


function App() {  
  const [logedIn , setLogeIn] = useState(false);
 



  return (
     <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about'  element={<About />} />
            <Route path='/dates' element={<Dates />}/>
          </Routes>
        
    </div>
  )
}

export default App
