import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import pic_3 from '../assets/pic_3.jpg'
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import {auth} from 'firebase'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SidebarChannel from './SidebarChannel';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/features/userSlice';

const Sidebar = () => {
const user = useSelector(selectUser)

  return (
    <div className='sidebar_main flex-[0.25] relative '>
    
     <div className='sidebar_top'>
      <h5> crypto dev</h5>
      <ExpandMoreIcon />
     </div>

     <div className='sidebar_channel'>
        <div className='sidebar_channel_header'>
          <div className='sidebar_header'>
          <ExpandMoreIcon />
          <h4>text channel</h4>
          </div>
          <AddIcon className='sidebar_add'/>  
        </div>
        <div className='sidebar_channel_list overflow-y-auto'>
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
     </div>
     </div>
     
     <div className=''>
     <div className='sidebar_voice '>
     <SignalCellular4BarIcon 
      className='sidebar_voiceicon hover:bg-green-300 rounded-lg'
      fontSize='large'
     />

     <div className='sidebar_voiceinfo '>
      <h3>voice connected </h3>
      <p>stream</p>
     </div>
     
     <div className='sidebar_voiceIcon'>
   
   <InfoOutlinedIcon />
     <CallOutlinedIcon />
     </div>

     </div>
     <div className='sidebar_profile '>
      <Avatar onclick={() => auth.singOut()} src={user.photo}/>
      <div className='sidebar_profileinfo '>
        <h5>@{user.displayName}</h5>
      </div>
      
      <div className='sidebar_profileicon '>
       <MicIcon />
       <HeadphonesIcon />       
       <SettingsIcon />
      </div>
     </div>
    </div>
    </div>
  )
}

export default Sidebar