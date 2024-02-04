import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import './chatheader.css'

const ChatHeader = () => {
  return (
    <div className='flex justify-between items-center text-gray-500 p-[10px]'>
        <div>
        <h3 className='flex items-center text-white'> <span className='text-gray-300 text-[30px] font-bold p-[10px]'> # Bitcoin</span> </h3>
        </div>
        <div className='chatHeader_right'>
        <NotificationsActiveIcon className=' hover:text-white hover:scale-110'/>
        <EditLocationIcon className=' hover:text-white hover:scale-110' />
        <PeopleAltIcon className=' hover:text-white hover:scale-110' />
        <div className='bg-gray-700 text-white rounded-lg p-[3px] flex items-center' >
            <input placeholder='search' className='bg-gray-700 text-white rounded-lg p-[3px] outline-none'/>
            <SearchRoundedIcon className=' hover:text-white hover:scale-125'/>
        </div>
        <SendRoundedIcon className=' hover:text-white hover:scale-110'/>
        <HelpRoundedIcon className=' hover:text-white hover:scale-110'/>
        </div>
    </div>
  )
}

export default ChatHeader