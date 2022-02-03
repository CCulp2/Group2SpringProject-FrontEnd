import './Components/getSendTest.js'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import getSendTest from './Components/getSendTest.js';
import MainNavigation from './layout/MainNavigation.js';
import genderbar from './layout/genderbar.js';
import LeftNavBar from './layout/leftnavbar.js';
import HomePage from './pages/HomePage.js';
import Men from './pages/Men.js';
import Women from './pages/Women.js';
import test from './pages/Test.js';
import Test from './pages/Test.js';

function App() {
  return (
    <div className="App">
      {MainNavigation()}
      {genderbar()}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>

   
    </div>
    
  );
}

export default App;
