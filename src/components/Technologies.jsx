import ImageReact from '../assets/react.svg'
import imageTailWind from '../assets/tailwind.png'

function Technoligies(){

return(
<section id="Tech" className="section">

    <div className="w-full pt-8 flex flex-col gap-16">

    <div className="container w-[80%]">
        <div className="flex justify-center items-center text-center">
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold">
            Let us create your dream <span className="text-animation">Website </span>
            for your personal Blog, product or that wierd App Website idea you have.
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
            <h1 className='text-md md:text-l lg:text-2xl font-bold text-indigo-500'>ReactJs</h1>
        </div>
        <div>
            <img src={imageTailWind} alt="Tailwind Image" className='w-60 lg:w-[20rem] bg-contain p-4' />
        </div>
    </div>
</section>
)
}

export default Technoligies;