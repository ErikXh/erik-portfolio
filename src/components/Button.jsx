import { useState } from "react"

const Button = ({btnName, onClick, type, link}) => {

  const handleClick = ()=>{
    if(onClick){
      onClick()
    }
  }
    return(

      <button
      type={type || 'button'}
      onClick={handleClick}
      className="group bg-[#6799b2] hover:bg-[#436a7de6] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline duration-500 shadow-lg">
        <span className="text-[#000] group-hover:text-white group-hover:opacity-100 duration-500">
          <a href={link}>
            {btnName}
          </a>
        </span>
      </button>
      
    )

}

export default Button;