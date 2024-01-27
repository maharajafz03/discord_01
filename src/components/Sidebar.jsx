import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SidebarChannel from './SidebarChannel';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import { Avatar } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar_main'>
    Sidebar
     <div className='sidebar_top'>
      <h2> crypto dev</h2>
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
        <div className='sidebar_channel_list'>
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
      <SidebarChannel />
    
      <SidebarChannel />
     </div>
     </div>
     
     <div className='sidebar_voice'>
     <SignalCellular4BarIcon 
      className='sidebar_voiceicon'
      fontSize='large'
     />

     <div className='sidebar_voiceinfo'>
      <h3>voice connected </h3>
      <p>stream</p>
     </div>
     
     <div className='sidebar_voiceIcon'>
   
   <InfoOutlinedIcon />
     <CallOutlinedIcon />
     </div>

     </div>
     <div className='sidebar_profile'>
      <Avatar />
      <div className='sidebar_profileinfo'>
        <h5>fucker</h5>
      </div>
      <div className='sidebar_profileicon'>
       <MicIcon />
       <HeadphonesIcon />       
       <SettingsIcon />
      </div>
     </div>
    </div>
  )
}

export default Sidebar