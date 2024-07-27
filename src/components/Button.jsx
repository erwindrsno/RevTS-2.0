import { useNavigate } from 'react-router-dom';


const Button = props =>{
  const nav = useNavigate();
  return (
    // eslint-disable-next-line react/prop-types
    <button onClick={ () => nav(props.path)}>{props.label}</button>
  )
}

export default Button;