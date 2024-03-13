import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css'
import {login, logout} from './app/features/userSlice'
import {selectUser} from './app/features/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import Login from './pages/Login'
import { auth } from './firebase/firebase'


const App = () => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

useEffect(() => {
  auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      //user is logged in

      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      }))
    } else {
      dispatch(logout());
    }
  })
})

  return (
    <div className='flex'>
     {user ? (
       <>
       <Sidebar />
       <Chat />
       </>
     ):(
      <Login />
     )}
      
    </div>
  )
}

export default App