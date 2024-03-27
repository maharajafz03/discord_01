// import React from 'react'
// import  './sidebarchannel.css'
// import {useDispatch} from 'react-redux'
// import {setChannelInfo} from './features/appSlice'

// function SidebarChannel({ id, channelName }) {

//     const dispatch = useDispatch();

//     return (
//         <div className="sideChannel" onClick={() => dispatch(setChannelInfo({
//                 channelId: id,
//                 channelName
//             }))}> 
//             <h4>
//                 <span className="span">#</span>
//                 {channelName}
//             </h4>
//         </div>
//     )
// }


// export default SidebarChannel


import React from 'react'
import './sidebarchannel.css'
import {useDispatch} from 'react-redux'
import { setChannelInfo } from '../app/features/appSlice'

const SidebarChannel = ({id, channelName}) => {
  
  const dispatch = useDispatch();
  
  return (
    <div className='sidechannel' 
            onClick={() => dispatch(setChannelInfo({
                       channelId: id,
                       channelName
               }))}>
        
            <h3>{channelName}</h3>
            {/* <span className='span'>  </span> */}
        
    </div>
  )
}

export default SidebarChannel