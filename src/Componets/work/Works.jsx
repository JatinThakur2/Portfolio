import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [ currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            icon: "./assets/writing.png",
            title: "Web Development",
            desc: "acdcasdcsdc sd casdc asdc asdc asd casd casd ",
            img:"https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg",
            
        },
        {
            id: 2,
            icon: "./assets/writing.png",
            title: "Mobile",
            desc: "acdcasdcsdc sd casdc asdc asdc asd casd casd ",
            img:"https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg",
        },
        {
            id: 3,
            icon: "./assets/writing.png",
            title: "Jatin",
            desc: "acdcasdcsdc sd casdc asdc asdc asd casd casd ",
            img:"https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg",
        },
       
    ];
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };
    return (
        <div className="works" id="works">
            <h1>Projects</h1>
            <div className="slider" style ={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                { data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src ={d.icon} alt= "" />

                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                        </div>
                        

                    </div>
                        <div className="right">
                            <img src="https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg" alt=""/>
                    </div>
                </div>
                    </div>
                    ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src ="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
            </div>
    )
}
