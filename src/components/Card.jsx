
const Card = ({ image, text , link}) => {

  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt="Card" className="w-full h-48 object-cover" />
      <div className="px-6 bg-slate-50 py-4">
        <a href={link} className="font-bold text-xl mb-2">{text}</a>
      </div>
    </div>

  );
};

export default Card;