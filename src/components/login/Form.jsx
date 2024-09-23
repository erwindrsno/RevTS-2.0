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
    <div className="flex flex-col w-full h-5/6 space-y-3 items-center justify-center ">
      <form action="" className='flex flex-col w-1/3 space-y-3 p-8 rounded-xl font-sans items-center bg-lightblue-950' onSubmit={handleSubmit}>
        <h1 className="font-sans">Masuk</h1>
        <div className='flex flex-col w-4/6'>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="Username" className="bg-bluegray-50 rounded font-sans text-bluegray-900 p-1 text-sm" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='flex flex-col w-4/6'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" placeholder="Password" className="bg-bluegray-50 rounded text-bluegray-900 p-1 text-sm" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <p id='warning' className="text-red-600 text-base text-center self-center m-0 p-0 invisible">{message}</p>
        <input type="submit" value="Masuk" className='bg-lightblue-600 w-2/12 h-7 rounded'/>
      </form>
    </div>
  );
};