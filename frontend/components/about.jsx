import { motion } from "framer-motion";

export default function About()
{
    return(
      <motion.section className="about" id="about" initial={{x:-20,opacity:0}} animate ={{x:0,opacity:1}} transition={{duration:0.5}} whileInView={"aniamate"}>
        <motion.h2 className="h2" initial={{x:-20,opacity:0}} animate ={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3}}>About</motion.h2>  
        <p>
            I am a passionate and self-driven developer with a strong curiosity for technology, design, and problem solving. Skilled in HTML5, CSS3, JavaScript (ES6+), React, and tools like Vite, Bootstrap 5, and Framer Motion, I also have experience with Node.js, REST APIs, and Git for version control.

I enjoy building clean, responsive, and user-friendly applications that balance functionality with design. Every project is an opportunity to learn, experiment, and refine my skills, from smooth navigation to accessible layouts.

Looking ahead, I aim to keep expanding my knowledge, collaborate with others, and create impactful digital solutions that connect people with technology in meaningful ways.

        </p>

        <motion.div className="about-detail">

            <div className="about-card first">  
                <ul>
                        <li><strong>Email:</strong> johndoe@example.com</li>
                        <hr />
                    <li><strong>Phone:</strong> +123 456 7890</li>
                    <hr />
                    <li><strong>Location:</strong> Douala, Cameroon</li>
                    <hr />
                    <li><strong>Skills:</strong> Web development, Desktop App Development, Computer Maintanance, Database Design , Game Development, Web Design</li>
                    <hr />

                    <li><strong>Experience:</strong> 2+ years building web apps</li>
                    <hr />

                    <li><strong>Hobbies:</strong> Coding, Gaming, basketball , calistenics , mind game</li>
                    <hr />

                </ul>
        </div>
            <div className="about-card"> </div>

        </motion.div>
      </motion.section>
    )
}