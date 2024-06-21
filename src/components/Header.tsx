import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__brand">Blogr</div>
        <div className="navbar__links">
          <a href="#product">Product ^</a>
          <a href="#company">Company ^</a>
          <div className="dropdown">
            <a href="#connect">Connect &#9662;</a>
            <div className="dropdown-content">
              <a href="#">Contact</a>
              <a href="#">Newsletter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="navbar_actions">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
      <div className="header_content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header_buttons">
          <button className="start-free">Start for Free</button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
