import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import {TextInput} from 'flowbite-react'
import axios from 'axios'

function signup() {
  let formdata = {}
  const [username, setUsername] =useState('')
  const [password,setPassword] =useState('')
  const [cpassword,setCpassword] =useState('')

  const handleSubmit = async (e)=>{
    formdata={username,password,cpassword}
    e.preventDefault()
    try {
      axios.post('http://localhost:8000/users/register',formdata)
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log("error while posting\n",error);
      })
    } catch (error) {
      console.log("error!!!",error)
    }
  }

  return (
    <div>
      <form>
        <TextInput placeholder='username' onChange={(e)=>setUsername(e.target.value)} required/>
        <TextInput placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
        <TextInput placeholder='confirm password' onChange={(e)=>setCpassword(e.target.value)} required/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default signup
