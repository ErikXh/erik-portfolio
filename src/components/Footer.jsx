import ContactForm from "./ContactForm";

function Footer(){

    return(
        <footer id="Contact" className="section pt-24 glass-effect p-5 mx-auto">

            <div className="max-w-[80%] mx-auto">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-center content-center items-center gap-6">
            <div className="container md:w-[80%] lg:w-[70%] bg-slate-50 z-10 rounded-lg shadow-lg p-4">
                <ContactForm/>
            </div>

            <div className="flex flex-col md:w-[80%] lg:w-[65%] content-center p-4 md:h-[15rem] lg:h-[32rem] gap-5">

                <h1 className="text-xl md:text-2xl"> Let's go on to build your website.</h1>
                <h2> Contact me through the contact from on your left or though my social media below.</h2>
                <h2> We can comunicate in these three langues: </h2>

                <div className="p-4 flex justify-even gap-4">
                    <div className="rounded-lg bg-blue-700 w-8 h-8">
                        <img src="" alt="German language" className="object-cover"/>
                    </div>
                    <div className="rounded-lg bg-blue-700 w-8 h-8">
                        <img src="" alt="English language" className="object-cover"/>
                    </div>
                    <div className="rounded-lg bg-blue-700 w-8 h-8">
                        <img src="" alt="Albanian language" className="object-cover"/>
                    </div>
                </div>
            </div>
            </div>

            <div className="container py-14 mx-auto w-[80%] flex flex-col md:flex-row justify-center flex-wrap text-center gap-10">
            <div>
                <p className="font-md pt-3 pb-3">E-mail:</p>
                <a href="mailto:mail@email.com" className="font-md hover:underline">email@email.com</a>
            </div>

            <div>
                <p className="font-md pt-3 pb-3">Phone number:</p>
                <a href="tel:123-456-7890" className="font-md pt-3 pb-3 hover:underline">123-456-7890</a>
            </div>

            <div>
                {/* to be updated */}
                <p className="font-md pt-3 pb-3"><span className="text-green-600">WhatsApp number:</span></p>
                <a href="https://wa.me/123-456-7890?text=I20%would20%like20%to20%buld20%a20%website"
                target="_blank" 
                className="font-md pt-3 pb-3 hover:underline hover:text-green-600">Send a message</a>
            </div>
            </div>

            <div className="container py-4 mx-auto w-[80%] flex flex-col items-center text-center gap-10">
            <h1 className="text-md">This Portfolio was build using ReactJs and Tailwindcss along with many amazing libraries</h1>
            <h1 className="text-md">I look forward to working with you!</h1>
            </div>
            </div>

        </footer>
    )
}

export default Footer;