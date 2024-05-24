import React from 'react'
import { assets, songsData } from '../assets/assets'


const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
       <div className='hidden lg:flex items-center gap-4'>
         <img className='w-12' src={songsData[0].image}></img>
         <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,10)}</p>
         </div>

         <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4 white'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon}></img>
                <img className='w-4 cursor-pointer' src={assets.prev_icon}></img>
                <img className='w-4 cursor-pointer' src={assets.play_icon}></img>
                <img className='w-4 cursor-pointer' src={assets.next_icon}></img>
                <img className='w-4 cursor-pointer' src={assets.loop_icon}></img>
            </div>
            <div className='flex items-center gap-5'>
                <p>1:06</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer '>
                     <hr className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
                </div>
                <p>3:20</p>    
            </div>

         </div>

       </div> 
       <div className='hidden lg:flex items-center gap-2 opacity-75 '>
            <img src={assets.plays_icon}></img>
            <img src={assets.mic_icon}></img>
            <img src={assets.queue_icon}></img>
            <img src={assets.speaker_icon}></img>
            <img src={assets.volume_icon}></img>
            <div className='w-20 bg-slate-50 h-1 rounded'>
                
            </div>
            <img src={assets.mini_player_icon}></img>
            <img src={assets.zoom_icon}></img>
       </div>
    </div>
  )
}

export default Player