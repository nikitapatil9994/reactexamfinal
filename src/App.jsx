import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Roomlist from './Components/Roomlist';
import Reservetion from './Components/Reservetion';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Roomlist />} />
        <Route path="/reservations" element={<Reservetion/>} />
      </Routes>
    </div>
  );
};

export default App;
