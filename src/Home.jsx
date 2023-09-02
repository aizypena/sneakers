import {useState} from "react";
import "./Home.css"

function Home() {
    return (
        <>
            <div className="home-main">
                <div className={"container home-container"}>
                    <div className={"cont"}>

                        {/*first section of my page*/}
                        <section className={"pics-desc"}>
                            <div className={"pics-highlight"}>
                                <div className={" pic-btn"}>
                                    <p className={"back pic-btn-p"}>&lt;</p>
                                </div>
                                <div className={" pic-btn"}>
                                    <p className={"next pic-btn-p"}>&gt;</p>
                                </div>
                            </div>
                            <div className={"product-pics"}>
                                <img className={"img-fluid"} src={"./p1.jpg"}/>
                                <img className={"img-fluid"} src={"./p2.jpg"}/>
                                <img className={"img-fluid"} src={"./p3.jpg"}/>
                                <img className={"img-fluid"} src={"./p4.jpg"}/>
                            </div>
                        </section>

                        {/*second section*/}
                        <section className={"btns"}></section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;