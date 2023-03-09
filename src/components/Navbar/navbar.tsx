import './styles.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">Wagering Calculator</div>
      <div className="links">
        <a className="link" href="/wagering-calculator/Exacta">
          Exacta
        </a>
        <a className="link" href="/trifecta">
          Trifecta
        </a>
        <a className="link" href="/superfecta">
          Superfecta
        </a>
        <a href="/picks">Picks</a>
      </div>
    </nav>
  );
};
