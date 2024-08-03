/* eslint-disable no-unused-vars */
import { useState } from "react";
import API from "../../api/api";
import axios from "axios";
import { encodeURL } from "../../utils/encoder";

export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {username: 'dosen123', password: 'dosen123'}

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
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col w-full h-4/5 items-center justify-center">
      <h1>Masuk</h1>
      <form action="" className='flex flex-col space-y-8 w-3/6 font-sans items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col w-3/6'>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" className="bg-bluegray-50 rounded font-sans" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='flex flex-col w-3/6'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" className="bg-bluegray-50 rounded" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Masuk" className='bg-lightblue-600 w-1/12 h-7 rounded'/>
        {message && <p className="text-red-600 text-xs self-center">{message}</p>}
      </form>
    </div>
  );
};