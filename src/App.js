import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Banner from './Pages/Home/Banner';
import Service from './Pages/Home/Service';
import Portfolio from './Pages/Home/Portfolio';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path='/portfolio' element={<Portfolio></Portfolio>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
