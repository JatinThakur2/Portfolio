import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {ServicesPortfolio, SkillPortfolio, HobbiesPortfolio,
    
} from "../../data"

export default function Portfolio() {
    const[selected,setSelected] = useState("Services")
    const[data,setData] = useState([])
    const list = [
        {
            id: "Services",
            title: "Services",
        },
        {
            id: "Skill",
            title: "My Skills",
        },
        {
            id: "Hobbies",
            title: "Hobbies",
        },
    ];
    useEffect(() => {
        switch (selected) {
            case "Services":
                setData(ServicesPortfolio);
                break;
                case "Skill":
                setData(SkillPortfolio);
                break;
                case "Hobbies":
                setData(HobbiesPortfolio);
                break;
            default:
                setData(ServicesPortfolio)
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item =>(
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
             <h3>{d.title}</h3>
                    <span>{d.span}
                    </span>
                </div>
                ))}
            
                
            </div>
            
        </div>
    )
}
