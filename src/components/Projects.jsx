import Card from "./Card";

function Projects(){

    const projects = [
        {
            image:"https://placekitten.com/300/200",
            text:"Beautiful Image",
            link:"#"
        }
    ]

    return(
        <section id="Projects" className="section">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
            image={projects[0].image} // Replace with your image URL
            text={projects[0].text}
            link={projects[0].link}/>
            <Card
            image="https://placekitten.com/300/200"  // Replace with your image URL
            text="Beautiful Image Name"/>
            <Card/>
           </div>
        </section>
    )
}

export default Projects;