/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Username dan Password anda tidak sesuai!");
  const [invisible, setInvisible] = useState("invisible");
  const navigate = useNavigate();

  // setMessage('Username atau password tidak sesuai!')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {username: username, password: password}

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
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
        sessionStorage.setItem('isLoggedIn', 'true');
        navigate('/home')
        // alert('ok')
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // setMessage('Username dan Password anda tidak sesuai!')
        const warning = document.getElementById('warning')
        warning.classList.remove('invisible')
      });
  };

  return (
    <div className="flex flex-col w-full h-5/6 space-y-3 items-center justify-center">
      <h1>Masuk</h1>
      <form action="" className='flex flex-col w-3/6 space-y-3 font-sans items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col w-3/6'>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="Username" className="bg-bluegray-50 rounded font-sans text-bluegray-900 p-1 text-sm" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='flex flex-col w-3/6'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" placeholder="Password" className="bg-bluegray-50 rounded text-bluegray-900 p-1 text-sm" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <p id='warning' className="text-red-600 text-sm self-center m-0 p-0 invisible">{message}</p>
        <input type="submit" value="Masuk" className='bg-lightblue-600 w-1/12 h-7 rounded'/>
      </form>
    </div>
  );
};