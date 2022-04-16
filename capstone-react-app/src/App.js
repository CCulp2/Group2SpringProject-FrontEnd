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
import Cart from './Components/ShoppingCart/Cart'
import Confirmation from './Components/Confirmation/Confirmation';
import ItemNotFound from './pages/ItemNotFound.jsx';
import Footer from './layout/Footer.jsx';
import React from 'react';
import { ToastContainer, Toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// This constant is used to create our theme for the website.
// It is used in the ThemeProvider component.
// This allows us to change the default colors of the website.
// All other creative changes are handled within the scope of the components.

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

// This is the main app. It is the parent of all other components.
// All of the routing is declared in the App function.

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ToastContainer />

        {/* Calling the MainNavigation components here makes sure they are always on top of the page. */}
      {MainNavigation()}
      {genderbar()}
      
      <Routes>
        <Route path='/Group2SpringProject-FrontEnd/' element={<HomePage />}/>
        <Route path='/Group2SpringProject-FrontEnd/Men' element={<Men/>}/>
        <Route path='/Group2SpringProject-FrontEnd/Women' element={<Women/>}/>
        <Route path='/Group2SpringProject-FrontEnd/test' element={<Test/>}/>
        <Route path='/Group2SpringProject-FrontEnd/register' element={<Register/>}/>
        <Route path='/Group2SpringProject-FrontEnd/Login' element={<Login/>}/>
        <Route path='/Group2SpringProject-FrontEnd/Item/:itemParameterizedName' element={<Item/>}/>
        <Route path='/Group2SpringProject-FrontEnd/Cart' element={<Cart/>}/>
        <Route path='/Group2SpringProject-FrontEnd/Confirmation' element={<Confirmation/>}/>
        <Route path='/Group2SpringProject-FrontEnd/ItemNotFound' element={<ItemNotFound/>}/>
      </Routes>
      {Footer()}
      </ThemeProvider>
    </div>
    
  );
}

export default App;
