import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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

    fetch('http://localhost:3000/login', init)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // or response.text() or response.blob() depending on your response type
      })
      .then(data => {
        console.log('Success:', data);
        // console.log(data.user.name);
        const objDisplayName = { key : data.user.name }
        // const objAcademicNum = { key : data.user.academic_num }
        sessionStorage.setItem('display_name', JSON.stringify(objDisplayName));
        // sessionStorage.setItem('academic_num', JSON.stringify(objAcademicNum));
        // console.log(sessionStorage.getItem('display_name'));
        navigate('/home');
      })
      .catch(error => {
        console.error('Error:', error);
        const warning = document.getElementById('warning')
        warning.classList.remove('invisible')
      });
  }
  
  const logoutAction = async () => {
    // isAuthRef.current = false;
    navigate('/')
  }

  return <AuthContext.Provider value={{ loginAction, logoutAction, sessionStorage }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};