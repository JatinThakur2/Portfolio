import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [ currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            icon: "./assets/writing.png",
            title: "Ecommerce Website",
            desc: "Build a bookstore using Mern stack (React and MongoDB) where you can buy and sell the book and also have a chat option where you can ask your quarries about the product with admin or seller",
            img:"https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg",
            
        },
        {
            id: 2,
            icon: "./assets/writing.png",
            title: "Mobile Diagnosis App",
            desc: "Build a mobile diagnosis app using java which can diagnose the mobile and give the report about all features are working properly or not.",
            img:"https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg",
        },
        {
            id: 3,
            icon: "./assets/writing.png",
            title: "Programable calculator",
            desc: "Build a calculator using java and javafx which can calculate problem like 2x+3y as well as error terms easily.",
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
