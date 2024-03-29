import './styles.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">Wagering Calculator</div>
      <div className="links">
        <a className="link" href="/wagering-calculator/Exacta">
          Exacta
        </a>
        <a className="link" href="/wagering-calculator/ExactaKey">
          Exacta Key
        </a>
        <a className="link" href="/wagering-calculator/Trifecta">
          Trifecta
        </a>
        <a className="link" href="/wagering-calculator/Superfecta">
          Superfecta
        </a>
        <a href="/picks">Picks</a>
      </div>
    </nav>
  );
};
