import React from 'react';

const About = () => {
  return (
    <section id='about' className='section'>

    <div className='container w-[80%] py-20 hidden'>

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

<div className='container w-[80%] py-20'>

<div className="py-4">
<div className="flex flex-row justify-center">

<h2 className='text-3xl lg:text-5xl font-semibold mb-3'>About Me</h2>

</div>
      <p>
      Hi! I'm Erik, a Salesforce Marketing Cloud Developer with a passion for creating impactful, 
      user-centered solutions. My journey into the tech world began in customer service, 
      where I developed a deep understanding of user needs, problem-solving, 
      and the importance of communication. This background helps me build not just functional 
      but intuitive and user-friendly systems that genuinely improve customer experiences.
      </p>
</div>

<div className="py-4">
    <h3 className='text-lg mb-1'>Transition to Coding</h3>
      <p>After learning how to code, I transitioned into Salesforce development, 
        where I now specialize in building robust marketing automation solutions. 
        My diverse experience enables me to blend technical expertise with empathy for end-users, 
        resulting in solutions that not only perform well but also meet the real-world needs of 
        customers and stakeholders.
      </p>
</div>
</div>

    
    </section>

  );
}

export default About;