import React, {useState , useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import { selectUser } from '../app/features/userSlice';
import 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';
//import firebase from 'firebase/app'; // Import firebase
//import firebase from 'firebase/app';
import 'firebase/firestore';
//import { initializeApp } from "firebase/app";
//import db from 'firebase/firebase'
import { db }   from '../firebase/firebase';


const Sidebar = () => {
const user = useSelector(selectUser)

const [Channels, setChannels] = useState([]); // Define channels state


useEffect(() => {
  //const db = firebase.firestore(); // Access Firestore database
  db.Collection('channels').onSnapshot(snapshot => (
    setChannels(snapshot.docs.map((doc) => ({
      id: doc.id,
      channel: doc.data(),
    })))
  ))
}, [])


// const handelAddchannel = () => {
//   const channelName = prompt("Enter channel name"); // Fixed spelling

//   if (channelName) {
//     //const db = firebase.firestore(); // Access Firestore database
//       db.collection('channels').add({
//       channelName: channelName,
//        }).then(() =>{
//         console.log('Channel added succesfully')
//        }).catch((error) => {
//         console.error('Error adding Channel: ' , error)
//        })
//    // Your Firebase add channel code
//   }
// }


const handelClick = () => {
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error)
});

}
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
          {/* <AddIcon onClick={handelAddchannel} className='sidebar_add'/>   */}
        </div>
        <div className='sidebar_channel_list overflow-y-auto'>
      {Channels.map(({id, channel}) => {
      
        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>

      })}
      <SidebarChannel/>
   
     </div>
     </div>
     <button onClick={handelClick}>Logout</button>
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
       <Avatar  src={user.photo}/>
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