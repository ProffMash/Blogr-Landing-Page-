import './FreeOpenSimple.scss';
import mobilei from '../images/mobilei.svg';

const FreeOpenSimple = () => {
  return (
    <section className="free-open-simple">
      <div className="free-open-simple__content">
        <h2>Free, open, simple</h2>
        <p>
          Blogr is a free and open source application backed by a large community
          of helpful developers. It supports features such as code syntax highlighting,
          RSS feeds, social media integration, third-party commenting tools, and works
          seamlessly with Google Analytics. The architecture is clean and is relatively
          easy to learn.
        </p>
        <h2>Powerful Tooling</h2>
        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes
          customization and deployment a breeze, but capable of producing even the most
          complicated sites.
        </p>
      </div>
      <div className="free-open-simple__image">
        <img src={mobilei} alt="phones" />
      </div>
    </section>
  );
};

export default FreeOpenSimple;
