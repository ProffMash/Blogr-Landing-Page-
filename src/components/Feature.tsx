import './Feature.scss';
import fdesktop from '../images/fdesktop.svg'

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature__content">
        <h2>Designed for the future</h2>
        <div className="feature__item">
          <h3>Introducing an extensible editor</h3>
          <p>Blogr features an exceedingly intuitive interface which lets
            you focus on one thing: creating content. The editor supports
            management of multiple blogs and allows easy manipulation of
            embeds such as images, videos, and Markdown. Extensibility with
            plugins and themes provide easy ways to add functionality or
            change the looks of a blog.
          </p>
        </div>
        <div className="feature__item">
          <h3>Robust content management</h3>
          <p>Flexible content management enables users to easily
            move through posts. Increase the usability of your blog by
            adding customized categories, sections, format, or flow.
            With this functionality, you’re in full control.
          </p>
        </div>
      </div>
      <div className="feature__image">
        <img src={fdesktop} alt="Editor" />
      </div>
    </section>
  );
};

export default Feature;
