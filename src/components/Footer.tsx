import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">Blogr</div>
      <div className="footer__links">
        <div className="footer__section">
          <h4>Product</h4>
          <a href="#overview">Overview</a>
          <a href="#pricing">Pricing</a>
          <a href="#marketplace">Marketplace</a>
          <a href="#features">Features</a>
          <a href="#integrations">Integrations</a>
        </div>
        <div className="footer__section">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="footer__section">
          <h4>Connect</h4>
          <a href="#contact">Contact</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
