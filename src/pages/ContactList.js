import { Link, useParams } from 'react-router-dom';

const ContactList = () => {
const { department } = useParams();
  return (
    <section>
      <h2>This is the contact of {department} department</h2>
        <Link to='/contact'>back to contact</Link>
    </section>
  );
};
export default ContactList;