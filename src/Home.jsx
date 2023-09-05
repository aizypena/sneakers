import { useState } from "react";
import "./Home.css";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

function Home() {
    const images = ["./p1.jpg", "./p2.jpg", "./p3.jpg", "./p4.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImageStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const nextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const backClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // add to cart btn function, minus and add
    const [counter, setCount] = useState(0);
    const addCart = () => {
        setCount(counter + 1);
    };
    const minusCart = () => {
        if (counter > 0) {
            setCount(counter - 1);
        }
    };

    return (
        <div>
            <section className="container section-1">
                <div className={"pics-highlight"} style={backgroundImageStyle}>
                    <div className="arr-btns-cont d-flex mx-auto justify-between items-center">
                        <ArrowBackIosSharpIcon
                            className="back btn-arr"
                            onClick={backClick} // Add onClick handler for back navigation
                        />
                        <ArrowForwardIosSharpIcon
                            className="next btn-arr"
                            onClick={nextClick} // Add onClick handler for next navigation
                        />
                    </div>
                </div>
                <div className="product-pics">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`${
                                index === currentImageIndex ? "active" : ""
                            }`}
                            src={image}
                        />
                    ))}
                </div>
            </section>

            <section className="section-2">
                <div className="container">
                    <p className="sneaker-company font-bold mb-2">
                        SNEAKER COMPANY
                    </p>
                    <p className="limited-ed display-4">
                        Fall Limited Edition Sneakers
                    </p>
                    <p className="sneakers-cap">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they'll withstand everything the weather can offer.
                    </p>
                </div>
            </section>

            <section className="section-3 container">
                <div className="price-main">
                    <div className="discount-container">
                        <div className="discount-price-container">
                            <p className="discount-price display-4 m-0">
                                $150.00
                            </p>
                        </div>
                        <div className="off-container d-flex justify-center">
                            <p className="off m-0">50%</p>
                        </div>
                    </div>
                    <div className="orig-price-container">
                        <p className="orig-price m-0 font-bold">$300.00</p>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="btns-main container">
                    <div className="btn1-container">
                        <button className="btn-1 add-minus">
                            <h3 className="m-0 btn-txt" onClick={minusCart}>
                                -
                            </h3>
                        </button>
                        <h5 className="m-0 counter">{counter}</h5>
                        <button className="btn-2 add-minus">
                            <h3 className="m-0 btn-txt" onClick={addCart}>
                                +
                            </h3>
                        </button>
                    </div>
                    <div className="btn-2-container">
                        <div className="add2cart-main">
                            <button className="add2cart-btn d-flex">
                                <p class="material-symbols-outlined m-0 cart-btn-txt cart-icon">
                                    shopping_cart
                                </p>
                                <p className="add2cart-txt m-0 font-bold cart-btn-txt">
                                    Add to cart
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
