import "./Home.css";
import { useState } from "react";

function Home() {
    //to display image
    const initialImage = "./p1.jpg";

    const [displayedImage, setDisplayImage] = useState(initialImage);

    const handleImageClick = (imageUrl) => {
        setDisplayImage(imageUrl);
    };

    //buttons
    const [counter, setCount] = useState(0);

    const minus = () => {
        if (counter > 0) {
            setCount(counter - 1);
        }
    };

    const add = () => {
        setCount(counter + 1);
    };

    return (
        <div className="container home-main">
            <div className="home-left flex flex-column justify-center items-center">
                <div id="displayImage" className="mb-4">
                    {displayedImage && (
                        <img
                            src={displayedImage}
                            alt="Displayed"
                            className="displayedImg"
                        />
                    )}
                </div>
                <div className="flex justify-between items-center picsContainer">
                    <img
                        src="./p1.jpg"
                        className="pics img-fluid"
                        onClick={() => handleImageClick("./p1.jpg")}
                    />
                    <img
                        src="./p2.jpg"
                        className="pics img-fluid"
                        onClick={() => handleImageClick("./p2.jpg")}
                    />
                    <img
                        src="./p3.jpg"
                        className="pics img-fluid"
                        onClick={() => handleImageClick("./p3.jpg")}
                    />
                    <img
                        src="./p4.jpg"
                        className="pics img-fluid"
                        onClick={() => handleImageClick("./p4.jpg")}
                    />
                </div>
            </div>
            <div className="home-right">
                <div className="container product-deets">
                    <p className="sneaker-txt">SNEAKER COMPANY</p>
                    <h1 className="limited-ed">
                        Fall limited edition sneakers
                    </h1>
                    <p className="sneaker-description">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they'll withstand everything the weather can offer.
                    </p>
                    <div className="price-cont">
                        <div>
                            <h3>$150.00</h3>
                        </div>
                        <div className="percentage flex items-center">
                            <p className="perc">50%</p>
                        </div>
                    </div>
                    <h6 className="orig-price">$300.00</h6>
                    <div className="flex all-btn">
                        <div className="flex btn-control">
                            <button className="minus-btn" onClick={minus}>
                                <p className="marg-0 btn-1 minus-p">-</p>
                            </button>
                            <p className="counter-output marg-0 btn-1">
                                {counter}
                            </p>
                            <button className="add-btn" onClick={add}>
                                <p className="marg-0 btn-1 add-p">+</p>
                            </button>
                        </div>
                        <div className="cart-btn-cont">
                            <button className="add2cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
