import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import './chat.css'
import ChatHeader from './chatheader/ChatHeader'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './message/Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/features/userSlice';
import { selectchannelId, selectchannelName } from '../app/features/appSlice';
import firebase from 'firebase';
import  db from '../firebase/firebase'

const Chat = () => {
 
  const user = useSelector(selectUser)
  const channelId = useSelector(selectchannelId)
  const channelName = useSelector(selectchannelName)
  const [Input, setInput] = useState()
  const [messages, setMessages] = useState([])
 
 useEffect(() =>{

    if (channelId){
      db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      )
    }
 } ,[channelId]);

 const sendMessage = (e) => {
  e.preventDefault();

  db.collection('channels').doc(channelId).collection('messages').
      add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: Input,
      user: user,
      })

   setInput('')
}
 
  return (
    <div className='chat'>
      <ChatHeader channelName = {channelName}/>
      <div className='flex-1'>
        {messages.map((message) =>{
          <Message
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
           />
        })}
        
      
        
      </div>
      <div className=' text-white flex items-center shadow-lg shadow-black/50 justify-between p-[10px] rounded-lg m-[20px] bg-gray-700'>
        <AddCircleOutlineRoundedIcon />
        <form className='flex-1'>
          <input 
          value={Input} 
          disabled={!channelId}
          onChange={(e) => setInput(e.target.value) } 
          placeholder={`Message #${channelName}`} 
          className='p-[15px] w-[100%] bg-transparent outline-none text-white text-lg'/> 
              <button type='submit' 
              disabled={!channelId}
              onClick={sendMessage} 
              className='hidden'>
              sent</button>
        </form>

            <div>
            <IconButton>
            <CardGiftcardRoundedIcon fontSize='large' className='p-[5px] '/>
            </IconButton>
            <GifBoxIcon fontSize='large' className='p-[5px] '/>
            <EmojiEmotionsIcon  fontSize='large' className='p-[5px]'/>
          </div>
      </div>
    </div>
  )
}

export default Chat