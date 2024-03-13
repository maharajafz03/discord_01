import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css'
import {selectUser} from './app/features/userSlice'
import Singinpage from './pages/Singinpage'
import {useSelector} from 'react-redux'
import Login from './pages/Login'


const App = () => {

  const user = useSelector(selectUser);
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