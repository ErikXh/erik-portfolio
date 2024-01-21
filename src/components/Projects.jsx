import Card from "./Card";

function Projects(){

    const projects = [
        {
            image:"https://placekitten.com/300/200",
            text:"Image",
            link:"#"
        },
        {
            image:"https://placekitten.com/300/200",
            text:"Image 2",
            link:"#"
        },
        {
            image:"https://placekitten.com/300/200",
            text:"Image 3",
            link:"#"
        }
    ]

    return(
        <section id="Projects" className="section">

            <div className="p-8 text-center">
                <h1 className="font-3xl">
                    ... Some of the porjects I have worked on
                </h1>
            </div>
            
            <div className="container max-w-[80%] pt-8 flex flex-col md:flex-row justify-center items-center content-center flex-wrap gap-8">
            
            <a href="/">
            <Card
            image={projects[0].image}
            text={projects[0].text}
            link={projects[0].link}/>
            </a>

            <a href="/">
            <Card
            image={projects[1].image}
            text={projects[1].text}
            link={projects[1].link}/>
            </a>

            <a href="/">
            <Card
            image={projects[2].image}
            text={projects[2].text}
            link={projects[2].link}/>
            </a>

           </div>
        </section>
    )
}

export default Projects;