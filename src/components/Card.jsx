
const Card = ({ image, text , link}) => {

  return (

    <div className="rounded-lg h-[16rem] overflow-hidden shadow-lg">
      <img src={image} alt="Card" className="w-full h-48 scale-[2] object-cover hover:transform hover:scale-110 duration-500 ease-in-out" />
      <div className="px-6 bg-slate-50 py-6 text-center">
        <a href={link} className="font-bold text-xl">{text}</a>
      </div>
    </div>

  );
};

export default Card;