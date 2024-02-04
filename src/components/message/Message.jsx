import { Avatar } from '@mui/material'
import React from 'react'

const Message = () => {
  return (
    <div className='flex item-center p-[20px] text-white'>
        <Avatar />
        <div className='ml-[20px]'>
            <h4>king
            <span className='text-gray-500 ml-[20px] text-base'>
                timestamp
            </span>
            </h4>

            <p>this is message</p>
        </div>
    </div>
  )
}

export default Message