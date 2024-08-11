import { Form } from '../../components/login/Form.jsx';
import { PropTypes } from 'prop-types';


export const Login = ({ updateIsLoggedIn }) =>{
  return (
    <Form updateIsLoggedIn={updateIsLoggedIn} />
  )
}

//eslint
Login.propTypes = {
  updateIsLoggedIn: PropTypes.func.isRequired,
};