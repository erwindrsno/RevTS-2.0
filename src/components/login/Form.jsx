/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useAuth } from "../../hooks/Authentication.jsx";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Username dan Password anda tidak sesuai!");
  const { loginAction } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {username: username, password: password}

    loginAction(loginData);
    
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