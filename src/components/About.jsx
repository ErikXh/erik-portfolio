import React from 'react';

const About = () => {
  return (
    <section id='about' className='section'>

    <div className='container w-[80%] py-20'>

    <div className="py-4">
        <h2 className='text-2xl'>About Me</h2>
          <p>Hi, I'm Erik, a former customer service rep turned front-end developer. 
            My journey into coding was fueled by a passion for technology and design.
          </p>
    </div>
    
    <div className="py-4">
        <h3 className='text-lg'>Transition to Coding</h3>
          <p>From handling customer queries to crafting interactive user interfaces, 
            the shift has been thrilling. It sparked my enthusiasm for coding and ignited a 
            desire to create visually appealing websites.
          </p>
    </div>

      <h3 className='text-lg'>Commitment as a Beginner</h3>
      <p>Despite being a beginner, I'm dedicated to delivering websites that exceed expectations. 
        Every project is a learning opportunity. I stay updated with the latest technologies to provide modern and efficient solutions.</p>
      <p>Thank you for considering me as your front-end developer. 
        I look forward to bringing your ideas to life through the power of code.</p>
    </div>
    </section>

  );
}

export default About;