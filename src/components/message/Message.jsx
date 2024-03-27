import { Avatar } from '@mui/material'
 import React from 'react';

 const Message = ({ timestamp , user , Message }) => {
  
  return (
    <div className='flex item-center p-[20px] text-white'>
       
        <Avatar src={user.photo} />
       
        <div className='ml-[20px]'>
            <h4>@{user.displayName}
            <span className='text-gray-500 ml-[20px] text-base'>
               
                <p> {new Date(timestamp?.toDate()).toUTCString()}</p>
            </span>
            </h4>

            <p>{Message}</p>
        </div>
    </div>
  )
}

export default Message