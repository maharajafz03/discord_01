import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './App.css'
import {selectUser} from './app/features/userSlice'
import Singinpage from './pages/Singinpage'
import {useSelector} from 'react-redux'


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
      <Singinpage />
     )}
      
    </div>
  )
}

export default App