import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jatin.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a href ="tel:+919805395100" className="href" >+91 9805395100</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>   <a href ="mailto:jatinthakur3333@gmail.com" className="href">jatinthakur3333@gmail.com</a></span>  
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>

                </div>
            </div>    
        </div>
    )
}
