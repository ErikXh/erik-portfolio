import ImageReact from '../assets/react.svg'
import imageTailWind from '../assets/tailwind.png'

function Technoligies(){

return(
<section id="Tech" className="section">

    <div className="w-full pt-8 flex flex-col gap-16">

    <div className="container w-[80%]">
        <div className="flex justify-center items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">
            Let us create your dream <span className="text-animation">Website </span>
            for your personal Blog, product or that unique Web-App idea you have.
            </h1> 
        </div>
    </div>

    <div className="container w-[60%]">
        <div className="flex justify-center items-center text-center">
            <h1 className="text-md md:text-l lg:text-2xl font-bold">
            To create your website I use the most popular technologies 
            used by some of the most popular websites in the world!
            </h1> 
        </div>
    </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-40 w-full my-10 text-center">
        <div className='p-2'>
            <img src={ImageReact} alt="React Image" className='bg-contain w-60 p-4 rotate-anm' />
            <h1 className='text-md md:text-l lg:text-2xl font-bold text-[#00D8FF]'>ReactJs</h1>
        </div>
        <div>
            <img src={imageTailWind} alt="Tailwind Image" className='w-60 lg:w-[30rem] bg-contain p-4' />
        </div>
    </div>
</section>
)
}

export default Technoligies;