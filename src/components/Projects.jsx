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
            <div className="container pt-8 max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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