import './Components/getSendTest.js'
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './layout/MainNavigation.js';
import genderbar from './layout/genderbar.js';
import HomePage from './pages/HomePage.js';
import Men from './pages/Men.js';
import Women from './pages/Women.js';
import Test from './pages/Test.js';
import { createTheme, ThemeProvider } from '@mui/material';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Item from './pages/Item.jsx';
import Cart from './pages/Cart.jsx';
import Confirmation from './pages/Confirmation.jsx';

const theme = createTheme({
  palette: {
    primary: {
       main:  '#C7CFD9'
    },
    secondary: {
      main: '#025E73'
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      {MainNavigation()}
      {genderbar()}
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Item' element={<Item/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Confirmation' element={<Confirmation/>}/>
      </Routes>
      </ThemeProvider>
   
    </div>
    
  );
}

export default App;
