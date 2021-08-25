import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {
    const textRef = useRef();
  
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ['Developer', 'Designer', 'Artist']
            
        })
    }, []);

    return (
        <div className="intro" id="intro" >
            
            <div className="left">
                <div className="imageContainer">
                  <img src="assets/man.png" alt=""></img>  
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Jatin Thakur</h1>
                    <h3>Full Stack developer </h3>
                    <h3>-<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio"><img src="assets/down.png" alt=""/></a>
            </div>
        </div>
    )
}
