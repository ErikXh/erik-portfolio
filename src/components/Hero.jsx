import Button from "./Button";


function Hero(){

return(

<div className="hero-section grid content-center justify-center lg:h-[100vh]">
    
    <div className="w-[80%] flex content-center justify-around flex-col lg:flex-row mx-auto">

        <div className="container w-full flex content-center lg:w-6/12 text-center">
        <div className="flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        Hello, my name is <span className="text-animation">Erik</span><br/> and I am a freelance 
        <span className="text-animation"> front end developer!</span>
        </h1> 
        </div>
        </div>

        <div className="container flex justify-end py-40 px-4 w-6/12">
            <img src="" alt="image of me" />
        </div>
    </div>
    <div className="container w-full flex justify-center py-8">
        <Button btnName="contact me"/>
    </div>
</div>
)
}

export default Hero;