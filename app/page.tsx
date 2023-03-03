import {BeakerIcon}from '@heroicons/react/24/solid'
import { ReactNode } from 'react';
function Homepage() {
  interface ReapeatBoxesProps{
    icon:ReactNode;
    title:string;
  }

  const repeateBoxes = ({icon,title}: ReapeatBoxesProps) =>{
    return(
        <div>
        <div className="flex flex-col items-center justify-center mb-5">
            {icon}
            <h2>{title}</h2>
        </div>
        <div className="space-y-2">
            <p className="infoText">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
            <p className="infoText">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
            <p className="infoText">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
        </div>
    </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className='flex gap-x-4'>
            {repeateBoxes({icon:<BeakerIcon className='h-8 w-8 text-blue-500'/>,title:"examples"})}
            {repeateBoxes({icon:<BeakerIcon className='h-8 w-8 text-blue-500'/>,title:"examples"})}
            {repeateBoxes({icon:<BeakerIcon className='h-8 w-8 text-blue-500'/>,title:"examples"})}
        </div>
    </div>
  )
}

export default Homepage