import './Components/getSendTest.js'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import getSendTest from './Components/getSendTest.js';
import MainNavigation from './layout/MainNavigation.js';
import genderbar from './layout/genderbar.js';
import HomePage from './pages/HomePage.js';
import Men from './pages/Men.js';
import Women from './pages/Women.js';
import test from './pages/Test.js';
import Test from './pages/Test.js';
import { createTheme, ThemeProvider } from '@mui/material';
import Register from './Components/Register.jsx';

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
      {Register()}
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
      </ThemeProvider>
   
    </div>
    
  );
}

export default App;
