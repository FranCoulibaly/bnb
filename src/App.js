import './App.css';
import "./styles/style.css"
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import AddNew from './pages/AddNew';
import HouseProvider from './contexts/HouseContext';
import SingleHouse from './pages/SingleHouse'

function App() {
  return (
    <HouseProvider>
      <div className='App'>
      <nav>
        <Link to="/browse">Browse All</Link>
        <Link to="/add-new">Add new</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/add-new" element={<AddNew/>}/>
        <Route path ="/house/:houseId" element={<SingleHouse/>}/>
      </Routes>
      </div>
    </HouseProvider>
  );
}

export default App;
