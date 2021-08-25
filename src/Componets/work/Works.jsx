import "./works.scss"

export default function Works() {

    const data = [
        {
            id: 1,
            title: "Web Development",
            span: "",
        },
        {
            id: 2,
            title: "Mobile Development",
            span: "",
        },
        {
            id: 3,
            title: "Logo Designing",
            span: "",
        },
        {
            id: 4,
            title: "IOT",
            span: "",
        },
    ];
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src ="assets/mobile.png" alt= "" />

                                </div>
                                <h2>Jatin</h2>
                                <p>oaidndncandc  lkalnldcj nadlcn  ak ncklan kdnca laknd ckna </p>
                                <span>Projects</span>
                        </div>
                        

                    </div>
                        <div className="right">
                            <img src="https://github.com/JatinThakur2/iTune/raw/master/Screenshot/Screenshot_2.jpg" alt=""/>
                    </div>
                </div>
            </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" />
            <img src ="assets/arrow.png" className="arrow right" alt=""/>
            </div>
    )
}
