import './Components/getSendTest.js'
import './App.css';
import getSendTest from './Components/getSendTest.js';
import MainNavigation from './layout/MainNavigation.js';
import genderbar from './layout/genderbar.js';
import LeftNavBar from './layout/leftnavbar.js';

function App() {
  return (
    <div className="App">
      {MainNavigation()}
      {genderbar()}
      {LeftNavBar()}
      {getSendTest()}
    </div>
    
  );
}

export default App;
