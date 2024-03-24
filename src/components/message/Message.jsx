import { Avatar } from '@mui/material'
 import React from 'react';


//  function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//  }
 const Message = () => {
  
  return (
    <div className='flex item-center p-[20px] text-white'>
        <Avatar />
        <div className='ml-[20px]'>
            <h4>king
            <span className='text-gray-500 ml-[20px] text-base'>
                {/* {time.toLocaleTimeString()} */}
                <p>Time showing....</p>
            </span>
            </h4>

            <p>this is message</p>
        </div>
    </div>
  )
}

export default Message