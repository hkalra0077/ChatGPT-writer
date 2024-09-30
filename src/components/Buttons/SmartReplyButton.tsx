import AiIcon from "../../../assets/Ai-Icon.svg"
import React from 'react';

const SmartReplyButton: React.FC =()=>{
    return (
        <button  className='flex justify-center shadow-md rounded-full absolute items-center w-full h-full' 
        onClick={() => console.log("Clicked on the button")} aria-label="Smart AI reply"
        >
            <img src={AiIcon} alt="Smart AI reply button" className="w-5 h-5" />
        </button>
    )
}

export default SmartReplyButton;