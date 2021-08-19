import "./topbar.scss";
import { PhoneOutlined, DraftsOutlined } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jatin.</a>
                    <div className="itemContainer">
                        <span><a href ="tel:+919805395100"><PhoneOutlined className="icon"/> +91 9805395100</a></span>
                    </div>
                    <div className="itemContainer">
                        
                        <span> <a href ="mailto:jatinthakur3333@gmail.com"><DraftsOutlined className="icon"/> jatinthakur3333@gmail.com</a></span>  
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
