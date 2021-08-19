import Topbar from "./Componets/topbar/Topbar";
import Intro from "./Componets/intro/Intro"
import Portfolio from "./Componets/portfolio/Portfolio"
import Works from "./Componets/work/Works"
import Contact from "./Componets/contact/Contact"
import "./app.scss"
function App() {
    return (<div className="app">
        <Topbar />
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