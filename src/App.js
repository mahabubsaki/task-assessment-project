import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import { Toaster } from 'react-hot-toast';
import Register from './Components/Pages/Register';
import Doctors from './Components/Part/Doctors';
import Hospital from './Components/Part/Hospital';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Toaster></Toaster>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Hospital></Hospital>}></Route>
          <Route path="doctors" element={<Doctors></Doctors>}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
