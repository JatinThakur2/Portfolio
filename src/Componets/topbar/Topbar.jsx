import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jatin.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 98053 95100</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jatinthakur3333@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                {/* <div className="itemContainer">
                        <Dehaze className="icon"/>
                </div> */}

                    
                </div>
            </div>    
        </div>
    )
}
