
import './App.css';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
const App=() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route> 
        <Route path="/Signup" element={<Signup/>}></Route>  
        <Route path="/home" element={<Home/>}></Route>                                                                                                                                                             /Route>
     </Routes>
    </div>
  );
}

export default App;
