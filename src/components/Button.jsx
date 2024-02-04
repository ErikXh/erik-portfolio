const Button = ({btnName, onClick, type, refrenceId}) => {

  const handleClick = ()=>{
    if(onClick){
      onClick()
    }
  }

  if(refrenceId){
    const target = document.getElementById(refrenceId)
  }

    return(

      <button
      type={type || 'button'}
      onClick={handleClick}
      className="group bg-[#6799b2] hover:bg-[#436a7de6] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline duration-500 shadow-lg">
        <span className="text-[#000] group-hover:text-white group-hover:opacity-100 duration-500">
          {btnName}
        </span>
      </button>
      
    )

}

export default Button;