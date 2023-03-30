import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Exacta } from './components/picks/Exacta';
import { Trifecta } from './components/picks/Trifecta';
import Superfecta from './components/picks/Superfecta';
import { Navbar } from './components/Navbar/navbar';
import { ExactaKey } from './components/picks/ExactaKey';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {' '}
          <Route path="/wagering-calculator/Exacta" element={<Exacta />} />
          <Route
            path="/wagering-calculator/ExactaKey"
            element={<ExactaKey />}
          />
          <Route path="/wagering-calculator/Trifecta" element={<Trifecta />} />
          <Route
            path="/wagering-calculator/Superfecta"
            element={<Superfecta />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
