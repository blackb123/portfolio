import { motion } from "framer-motion"
import { useState,useContext } from "react";
import { Themecontext} from '../context/themecontext'

export default function Navbar()
{    
    const { theme } = useContext(Themecontext);
    

    const [nav,setnav]=useState("");
    const btnfade=
    {
    initial:{opacity:0,y:20},
     animate:{opacity:1,  y:0}, 
    transition:{duration:0.6},
    
    };
    function navlink(){

        nav=="active"? setnav(""):setnav("active");

}    
    const navlinktimer = {
        initial:{},
        animate:{
            transition:{
                staggerChildren:0.15
            }
        }
    }
    return(
        < motion.nav className={`navbar ${theme}`} initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}}
        
        transition={{duration:1.2,ease:"easeOut"}}>
            
            <motion.div className="nav-logo " whileHover={{scale:1.05}} whileTab={{scale:0.95}} >
                D-tech
            </motion.div>
            <button className={nav=="active"?"humberger-btn active ":"humberger-btn  "} onClick={navlink}>
              <i className="fa-solid fa-bars"></i>
            </button>
                
            <motion.ul className={nav=="active"?"active nav-link":" nav-link"} >
                {/**nav lninks */}
                <motion.li
                whileHover={{scale:1.05}}
                 whileTab={{scale:0.95}} >
                     <a href="#home" className={`text ${theme}`}>Me</a> </motion.li>
             <motion.li 
              whileHover={{scale:1.05}} 
              whileTab={{scale:0.95}} >
                 <a href="#about" className={`text ${theme}`}>About</a> 
            </motion.li>

              <motion.li 
              whileHover={{scale:1.05}} 
              whileTab={{scale:0.95}} >
                 <a href="#project" className={`${theme}`}>project</a> </motion.li>

              <motion.li 
              whileHover={{scale:1.05}}
               whileTab={{scale:0.95}} >
                 <a href="#roadmap" className={`${theme}`}>Roadmap</a> </motion.li>

                <motion.li  
                whileHover={{scale:1.05}} 
                whileTab={{scale:0.95}} > 
                <a href="#skill" className={`${theme}`}>skills</a> </motion.li>
            
            </motion.ul>
              
                
        </motion.nav>
    )
}