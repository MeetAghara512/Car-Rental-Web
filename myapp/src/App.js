import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import GetCar from './components/Getcar';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alldata } from './components/Assets/RentCarData';
import RentCarCards from './components/RentCarCards';
import SellCar from './components/SellCar';
import AccountProfile from './components/AccountProfile';
import "./components/Popup.css";
// import Tempp from './components/Tempp';

function App() {
  return (
    <div className="App w-[100vw] bg-gray-200">
      <Navbar></Navbar>
      {/* <h1 className='text-blue-900 text-[100px]'>Hello Meet</h1> */}
      {/* <SmallCarCardRemove></SmallCarCardRemove> */}
      {/* <button onClick={diffClicked}>hello</button> */}
      {/* <Home> </Home> */}
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Getcar' element={<GetCar />}></Route>
        <Route path='/SellCar' element={<SellCar />}></Route>
        <Route path='/RentCarCards' element={<RentCarCards alldata={alldata}/>}></Route>
        <Route path='/AccountProfile' element={<AccountProfile alldata={alldata}/>}></Route>
        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;