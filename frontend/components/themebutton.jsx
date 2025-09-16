import { useContext, useEffect, useState } from "react";
import { Themecontext,Themeprovider } from '../context/themecontext'

function FixedButton() {
    const { theme,settheme } = useContext(Themecontext)
    const [color,setcolor]= useState("")
     const [toggle,settoggle]= useState("")
    function toggler(e)
    {
        toggle==""?settoggle("toggle"): settoggle("");
    }
      function contrast(e)
    {
        e.target.id=="contrast"?settheme("contrast"): settheme("constrast");
    }
      function light(e)
    {
        e.target.id=="light"?settheme("light"): settheme("constrast");

    }
      function dark(e)
    {
        e.target.id=="dark"?settheme("dark"): settheme("constrast");

    }
      function red(e)
    {
        e.target.id=="red"?settheme("red"): settheme("constrast");

    }
      function blue(e)
    {
        e.target.id=="blue"?settheme("blue"): settheme("contrast");

    }
  return ( 
  <div className="fixed">

    <button className="fixed-btn" animate={{rotate:[0,3,10]}} transition={{duration:3,repeat:Infinity}}  onClick={toggler}>
        +
        </button>

        <div className={`theme ${toggle}`} >
            <p>Color Themes</p>
            <div className="theme-btn">
                <div className="fixed-btn" id="light" onClick={light} ></div> 
                <div className="fixed-btn" id="dark" onClick={dark}></div> 
                <div className="fixed-btn" id="contrast" onClick={contrast}></div> 
                <div className="fixed-btn" id="red" onClick={red}></div> 
                <div className="fixed-btn" id="blue" onClick={blue}></div> 
            </div>
            
        </div>
  </div>
   
  );
}

export default FixedButton;
