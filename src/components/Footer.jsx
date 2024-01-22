import ContactForm from "./ContactForm";

function Footer(){

    return(
        <footer className="section glass-effect">
            <div className="flex flex-col lg:flex-row items-center gap-6">

            <div className="container w-3/6 bg-slate-50 z-10 rounded-lg shadow-lg p-4">
                <ContactForm/>
            </div>
            <div className="w-3/6 p-4">
                <h1> Let's go on to build your website.</h1>
                <h2> Contact me through the contact from on your left or though my social media below.</h2>
                <h2> We can cmunicate in these three langues: </h2>
                <div>
                    
                </div>
            </div>
            </div>

        </footer>
    )
}

export default Footer;