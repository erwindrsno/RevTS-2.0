// import '../style/index.css'
// import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';


const Login = () =>{
  return (
    <div className='flex flex-col h-screen w-screen relative bg-slate-800'>
      <Header />
      <div className='flex grow items-center justify-center'>
        <Form />
      </div>
    </div>
  )
}

export default Login;