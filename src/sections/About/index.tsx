import Contact from './Contact/index';

// Styles
import './styles.css';

export default function ContactContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="about-us">
      <div className="container">
        {children}
        <Contact />
      </div>
    </section>
  );
}
