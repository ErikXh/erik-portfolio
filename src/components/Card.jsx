
const Card = ({ image, text , link}) => {

  return (

    <div className="rounded-lg h-[16rem] max-w-md overflow-hidden shadow-lg cursor-pointer">
      <img src={image} alt="Card" className="w-full h-48 object-cover hover:transform hover:scale-150 duration-500 ease-in-out" />
      <div className="glass-effect text-center p-5">
        <a href={link} target="_blank" className="font-bold text-md md:*:text-xl">{text}</a>
      </div>
    </div>

  );
};

export default Card;