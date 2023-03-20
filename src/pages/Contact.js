import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <p>Department of Administration</p>
		<Link to={`/contact/administration`}>more info</Link>
	  <p>Department of Media</p>
		<Link to={`/contact/media`}>more info</Link>
	  <p>Department of Justice</p>
		<Link to={`/contact/justice`}>more info</Link>
		{' '}
      <Link to='/'>
        Back Home
      </Link>
    </section>
  );
};
export default Contact;