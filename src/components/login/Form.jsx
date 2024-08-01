/* eslint-disable no-unused-vars */
import { useState } from "react";
import API from "../../api/api";
import axios from "axios";
import { encodeURL } from "../../utils/encoder";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("hai");

    // let formElements = event.currentTarget.elements;
    // let arr = [];
    // for (let i = 0; i < event.currentTarget.length-1; i++) {
    //   arr[i] = formElements[i].value;
    // }

    // const loginData = {username: arr[0], password: arr[1]};

    const loginData = {username: 'dosen123', password: 'dosen123'}

    const init = {
      method: 'POST', // or 'GET' if you are using GET method
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

    // try {
    //   const response = await axios.post(`http://127.0.0.1:3000/login`, {
    //     username,
    //     password
    //   })
    //   // console.log(response.status);
    //   // console.log(response.data.message);
    //   alert(response.data.message);
    // } catch (error) {
    //   event.target.reset();
    //   // console.log(error.response.status);
    //   setMessage("Sign in failed!");
    // }
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