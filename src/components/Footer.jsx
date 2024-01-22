import ContactForm from "./ContactForm";

function Footer(){

    return(
        <footer id="Contact" className="section glass-effect grid justify-center items-center content-center">
            <div className="flex flex-col-reverse lg:flex-row justify-center content-center items-center gap-6">

            <div className="container  bg-slate-50 z-10 rounded-lg shadow-lg p-4">
                <ContactForm/>
            </div>
            <div className="flex flex-col content-center p-4 md:h-[15rem] lg:h-[32rem]">

                <h1 className="text-xl md:text-2xl"> Let's go on to build your website.</h1>
                <h2> Contact me through the contact from on your left or though my social media below.</h2>
                <h2> We can comunicate in these three langues: </h2>

                <div>
                    <div className="rounded-lg bg-blue-700 w-8 h-8">

                    </div>
                </div>
            </div>
            </div>

        </footer>
    )
}

export default Footer;