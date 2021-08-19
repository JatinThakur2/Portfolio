import Topbar from "./Componets/topbar/Topbar";
import Intro from "./Componets/intro/Intro"
import Portfolio from "./Componets/portfolio/Portfolio"
import Works from "./Componets/work/Works"
import Contact from "./Componets/contact/Contact"
import "./app.scss"
import { useState } from "react";
function App() {
    const [menuOpen,setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <div className="sections">
            <Intro />
            <Portfolio />
            <Works />
            <Contact/>

        </div>

    </div>
    );
}

export default App;