import { Avatar } from '@mui/material'
import React from 'react';

 const Message = ({timestamp , user , message}) => {  
  return (
    <div className='flex item-center p-[100px] text-white'>  
         <Avatar src={user.photo} />      
               
        <div className='ml-[20px]'>
            <h4>@
            <span className='text-gray-500 ml-[20px] text-base'>
               
                <p> {new Date(timestamp?.toDate()).toUTCString()}</p>
            </span>
            </h4>

            <p>{message}</p>  
        </div>
    </div>
  )
}

export default Message