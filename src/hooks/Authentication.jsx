import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const loginAction = async (data) => {
    const init = {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch('http://127.0.0.1:3000/login', init)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // or response.text() or response.blob() depending on your response type
      })
      .then(data => {
        console.log('Success:', data);
        setIsAuth(true);
        navigate('/home');
        // alert('ok')
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // setMessage('Username dan Password anda tidak sesuai!')
        const warning = document.getElementById('warning')
        warning.classList.remove('invisible')
      });
  }
  
  const logoutAction = async () => {
    setIsAuth(false);
    navigate('/')
  }

  return <AuthContext.Provider value={{ loginAction, logoutAction }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};