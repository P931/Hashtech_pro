import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigningPage from './Components/SigningPage';
import HomePage from './Components/HomePage';
import SelectedCard from './Components/SelectedCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SigningPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/usercard' element={<SelectedCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
