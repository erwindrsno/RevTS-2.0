/* eslint-disable no-unused-vars */
import { useState } from "react";
import API from "../api/api";
import axios from "axios";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API}/login`, {
        username,
        password
      })
      // console.log(response.status);
      // console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      event.target.reset();
      // console.log(error.response.status);
      setMessage("Sign in failed!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-md p-8 space-y-8 w-7/12">
      <h1 className="text-2xl">Masuk</h1>
      <form action="/login" method="post" className='flex flex-col space-y-8 items-center w-full font-sans' onSubmit={handleSubmit}>
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

export default Form;