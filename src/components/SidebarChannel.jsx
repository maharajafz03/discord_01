import React from 'react'
import './sidebarchannel.css'

const SidebarChannel = ({id, channelName}) => {
  return (
    <div className='sidechannel'>
        <p>
            <span className='span'> {channelName}</span>
        </p>
    </div>
  )
}

export default SidebarChannel