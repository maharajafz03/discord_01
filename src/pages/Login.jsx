import React from 'react';
import Discord from '../assets/Discord.png';
import db, { auth, provider } from '../firebase/firebase';

const Login = () => {
  
  const signIn = () => {
    // Firebase direct res..
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className='grid place-items-center h-100vh w-[100%]'>
      <div className='flex items-center justify-center'>
        <img src={Discord} className='w-[30%]' />
        <div className='flex items-center'>
          <button onClick={signIn} className='absolute top-[60%] right-[40%] w-[200px] bg-blue-400 rounded-lg text-white hover:bg-transparent/80'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

//import React from 'react';
// import Discord from '../assets/Discord.png';
// import { auth, provider } from '../firebase/firebase';

// const Login = () => {
  
//   const signIn = () => {
//     // Firebase direct res..
//     auth.signInWithPopup(provider)
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }

//   return (
//     <div className='grid place-items-center h-100vh w-[100%]'>
//       <div className='flex items-center justify-center'>
//         <img src={Discord} className='w-[30%]' />
//         <div className='flex items-center'>
//           <button onClick={signIn} className='absolute top-[60%] right-[40%] w-[200px] bg-blue-400 rounded-lg text-white hover:bg-transparent/80'>
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React from 'react'
// import Discord from '../assets/Discord.png'
// import {auth, provider} from '../firebase/firebase'

// const Login = () => {
  
//   const signIn =() =>{
//     //fire base direct res..
//     auth.signInwithPopup(provider).then((result) =>{console.log(result.user)}).catch((error) => alert(error.message));
//   }

//   return (
//     <div className='grid place-items-center h-100vh w-[100%]'>
//     <div className='flex items-center justify-center'>
//       <img src={Discord} className='w-[30%] '/>
//       <div className='flex items-center'>
//       <button onClick={signIn} className=' absolute top-[60%] right-[40%] w-[200px] bg-blue-400 rounded-lg text-white hover:bg-transparent/80'>Singup</button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Login












//upcoming db connect code

// import React, { useState } from 'react'
// import login from '../assets/login.jpeg'
// import Singuppage from './Singuppage'

// const Login = () => {
  
//   const [Singup,setsingup] = useState(false)
  
//  const handeleclick=() =>{
//   e.preventdefault()
//   setsingup( <Singuppage />)
//  }
 
//   return (
//     <div>
//         <div>
//             <img src={login} className='h-100vh w-100vh fixed  '/>
//             <div className=' absolute top-10 right-7 bg-white/50 h-[260px] rounded-lg p-5'>
//                 <form>
//                     <p>Email</p>
//                     <input type='text' placeholder='email' className='outline-none relative w-full p-1 bg-transparent/50 rounded-lg' />
//                     <p className='relative top-[20px]'>Password</p>
//                     <input type='password' placeholder='password' className='outline-none relative top-5 w-full p-1 bg-transparent/50 rounded-lg' />
//                     <div className='relative top-[45px]'>
//                     <h6>Don't have an account ? <button value={Singup} onClick={handeleclick} className='bg-white rounded-lg p-1 hover:bg-blue-500'>Singup</button></h6>
//                     </div>
//                     <button className='bg-blue-500 relative top-14 w-full rounded-lg p-1  hover:bg-transparent/30'>Login</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login