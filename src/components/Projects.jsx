import Card from "./Card";
import approImg from "../assets/approlp.png"
import oustaticaImg from "../assets/outstatica.png"
import codePen from "../assets/codepen.png"
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const controls = useAnimation();

    useEffect(()=>{
        if(isInView){
            controls.start({opacity:1, y:0})
        }
    })

    return(
    <section id="Projects" className="section">

        <motion.div
            variants={{
                hidden: {opacity: 0, y: 100},
                visible: {opacity:1, y:0}
            }}
            initial="hidden"
            animate = {controls}
            transition={{duration: 0.65}}
        >
        <div ref={ref} className="max-w-[80%] mx-auto">

            <div className="p-8 text-center">
                <h1 className="text-3xl lg:text-5xl font-semibold">
                    Some of the projects I have worked on
                </h1>
            </div>
            
            <div className="container pt-8 flex flex-col md:flex-row justify-center items-center content-center flex-wrap gap-8">
            
            
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
        </div>
        </motion.div>
    </section>
    )
}

export default Projects;