import './StateOfArt.scss';
import phonesill from '../images/phonesill.svg';

const StateOfArt = () => {
  return (
    <section className="state-of-art">
      <div className="state-of-art__content">
        <div className="state-of-art__image">
          <img src={phonesill} alt="Infrastructure" />
        </div>
        <div className="art">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the
            backbone for ultra-fast connectivity. This ensures your site will load instantly
            no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </section>
  )
};

export default StateOfArt;
