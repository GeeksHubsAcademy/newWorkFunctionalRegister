
import './App.css';

//In order to be able to work with react-router-dom, we import the next methods..

import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Importing components
import Header from './Components/Header/Header';
//Importing containers
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* All the app is inside here, inside this element */}

          <Header/>

          <Routes>

              {/* What is contained here, is the part that will change or be able to swap */}
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>

          </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
