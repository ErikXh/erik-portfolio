import Card from "./Card";
import approImg from "../assets/approlp.png"
import oustaticaImg from "../assets/outstatica.png"
import codePen from "../assets/codepen.png"

function Projects(){

    const projects = [
        {
            image: approImg,
            text:"Appro landing page",
            link:"https://github.com/ErikXh/web/tree/main/ApproLandingPage"
        },
        {
            image: oustaticaImg,
            text:"Outstatica landing page",
            link:"https://github.com/ErikXh/web/tree/main/OutstaticaLandingPage"
        },
        {
            image: codePen,
            text:"Code Pen projects",
            link:"https://codepen.io/Erik_Xh"
        }
    ]

    return(
        <section id="Projects" className="section">

            <div className="p-8 text-center">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                    ... Some of the projects I have worked on
                </h1>
            </div>
            
            <div className="container max-w-[80%] pt-8 flex flex-col md:flex-row justify-center items-center content-center flex-wrap gap-8">
            
            
            <Card
            image={projects[0].image}
            text={projects[0].text}
            link={projects[0].link}/>
            
            <Card
            image={projects[1].image}
            text={projects[1].text}
            link={projects[1].link}/>

            <Card
            image={projects[2].image}
            text={projects[2].text}
            link={projects[2].link}/>

           </div>
        </section>
    )
}

export default Projects;