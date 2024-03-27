import React from 'react';
import Discord from '../assets/Discord.png';
import  { auth, provider } from '../firebase/firebase';
//import image from "../assets/image8-2.webp"
//import { signInWithPopup } from 'firebase/auth'; // Correct import statements


const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
}
  //   const signIn = () => {
  //    //Firebase direct res..
  //   signInWithPopup(auth , provider)
  //      .then((result) => {
  //       //handle authendication.. 
  //        console.log(result.user);
  //      })
  //     .catch((error) => {
  //       //handle auth error 
  //       alert(error.message);
  //     });
  // }

  return (
    <div className='grid place-items-center h-100vh w-[100%]'>
      <div className='flex items-center justify-center'>
        <img src={Discord} className='w-[30%]' />
        <div className='flex items-center'>
        {/* <div className='bg-cyan-200 p-14 rounded-lg'>
        <p className='text-gray'>Email</p>
          <input type='email' placeholder='Here Email' className='rounded-lg p-2 bg-cyan-100'/>
          <p>Password</p>
          <input type='password' placeholder='Here Password' className='rounded-lg p-2 bg-cyan-100'/>
        <div className='bg-white mt-10 '>
          <button onClick={signIn} className='rounded-lg hover:bg-black/10'> <span className='p-3 '>Continue with google</span> <img src={image} className='w-8 h-5 rounded-lg'/></button>
        </div>
        </div> */}

          <button onClick={signIn} className='absolute top-[60%] right-[40%] w-[200px] bg-blue-400 rounded-lg text-white hover:bg-transparent/80'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

