function Header({ university, title, subtitle }) {
  return (
    <header className="top-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-logo">TIU</div>

          <div>
            <p className="brand-university">{university}</p>
            <h1>{title}</h1>
          </div>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          Academic Records
        </div>
      </div>

      <div className="header-subtitle">
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
