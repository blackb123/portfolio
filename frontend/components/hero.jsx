import { delay, motion, scale  } from "framer-motion"
export default function Hero() {
    const navlinktimer = {
        initial: {},
        animate: {
            transition: { staggerChildren: 0.2, }
        },
    };

    const btnfade = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0,
         transition: { duration: 0.6, } },
    };

    return (
        <motion.section id="home" className="hero"
            transition={{ duration: 0.5, ease: "ease", delay: 0.2 }}>
            <div className="hero-container">
                <motion.div className="hero-content" variants={navlinktimer}>

                    <motion.div className="hero-barge">Hi am brad👋
                    </motion.div>

                    <motion.h1 className="glitch"  initial={{opacity:0,x:-20}}
                      animate={{opacity:1 ,x:0}} transition={{duration:1}} whileHover={{ scale: 1.02}}>
                        DEUTOU NGONJUTSIO BRAD EMERY
                    </motion.h1>

                    <motion.h2 className="hero-subtitle">Inspired Computer Engineer & Fullstack Developper

                    </motion.h2>
                    <motion.p className="hero-description">I create visual appealing sotfware with professional architechture and userfriendly UI, Combining AI intelligent with human creativity to produce the most efficient out for u

                    </motion.p>
                    <motion.div className="but" variants={navlinktimer}>
                       
                        <button className="projects" variants={btnfade} whileHover={{scale:1.05}}> Download CV</button>

                         <button className="contact" variants={btnfade} whileHover={{scale:1.05}}  
                                            onClick={() =>
                        window.open(
                        `https://wa.me/237671810319?text=${encodeURIComponent(
                            "Hello! I want to contact you about your services."
                        )}`,
                        "_blank"
                        )
                    }> Contact Me</button>

                    </motion.div>
                    <motion.div className="social-links" variants={navlinktimer}>
                        <motion.a href="#" variants={btnfade}>
                            <i className="fab fa-github" variants={btnfade}></i>
                        </motion.a>
                        <motion.a href="#" >
                            <i className="fab fa-linkedin" variants={btnfade}></i>
                        </motion.a>
                        <motion.a href="#" >
                            <i className="fab fa-facebook" variants={btnfade}></i>
                        </motion.a>
              
                </motion.div>
                  </motion.div>
                <motion.div className=" hero-image " initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.3}}>
                        <motion.div className="floater" animate={{y:[0,-10,0 ],rotate:[0,2,0]}} 
                        transition={{duration: 3, ease:"easeInOut",repeat:Infinity}}> 
                            <span>
                                💻 currently working  on a school management system and a saas app!
                            </span>
                        </motion.div>
                </motion.div>
              
               
                
            </div>
        </motion.section>
    );
}
