import React from 'react'
import IconButton from '@mui/material/IconButton';
import './chat.css'
import ChatHeader from './chatheader/ChatHeader'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './message/Message';

const Chat = () => {
 
 
 
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='flex-1'>
        <Message />
        <Message />
        <Message />
        <Message />
        
        <Message />
      </div>
      <div className='text-white flex items-center shadow-lg shadow-white/10 justify-between p-[10px] rounded-lg m-[20px] bg-gray-700'>
        <AddCircleOutlineRoundedIcon />
        <form className='flex-1'>
          <input placeholder='type here' className='p-[15px] w-[100%] bg-transparent outline-none text-white text-lg'/> 
          <button type='submit' className='hidden'>sent</button>
        </form>

            <div>
            <IconButton onClick={manage}>
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