import './App.css';
import { Routes,Route } from 'react-router';
import Home from './Routes/home/Home';
import Partner from './Routes/partner/Partner';
import Navbar from './Routes/navigationbar/Navbar.component';
import TopBanner from './Routes/topbanner/TopBanner';

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/partner' element={<Partner/>} />
      </Routes>
    </div>
  );
}

export default App;
