import React, { useState } from 'react'

const Login2 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const Formhandler = (e) =>{
  e.preventDefault()
console.log(email);
console.log(password);

}

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black text-white'>
     <div className='border-2 border-emerald-300 p-20'>

<form  onSubmit={(e) => {
  Formhandler(e)
}}

className='flex flex-col items-center justify-center '>
<input
value={email}
onChange={(e) =>{
  setEmail(e.target.value)
}}
required
 className='border-2 border-emerald-600  mt-5 px-5 py-4 text-xl outline-none bg-transparent rounded-3xl placeholder:text-gray-300' type="email" placeholder="Enter Your email"/>
<input
value={password}
onChange={(e)=>{
  setPassword(e.target.value)
}}

required
 className = 'border-2 border-emerald-600 rounded-3xl mt-5 px-5 py-4 text-xl outline-none bg-transparent placeholder:text-gray-300'type="password" placeholder="Enter Your Password"/>


<button className=' border-none bg-emerald-600 rounded-2xl px-5 py-4 text-white outline-none mt-5'>Login</button>


</form>

     </div>
    </div>
  )
}

export default Login2
