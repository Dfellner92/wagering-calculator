import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Exacta } from './components/picks/Exacta';
import { Navbar } from './components/Navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {' '}
          <Route path="/wagering-calculator/Exacta" element={<Exacta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
