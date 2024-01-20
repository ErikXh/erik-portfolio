const Button = ({BtnName}) => {

    return(
        <button className="group bg-[#6799b2] hover:bg-[#d8a9ac] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline duration-500 shadow-lg">
        <span className="text-white group-hover:text-[#000] group-hover:opacity-100 duration-500">
          {BtnName}
        </span>
      </button>
    )

}

export default Button;