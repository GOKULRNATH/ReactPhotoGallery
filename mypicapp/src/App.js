import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addphoto from './components/Addphoto';
import Gallery from './components/Gallery';
import Navpic from './components/Navpic';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Navpic/>
    <div className="App">
      
      <Routes>
          
          <Route exact path="/" element={<Gallery/>} />
          <Route exact path="/Addphoto" element={<Addphoto/>} />
          <Route exact path="/Login" element={<Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
