import "./Footer.css";

function Footer() {
    return (
        <div>
            <hr className="h-line" />
            <div className="footer-cont container flex flex-column justify-center items-center">
                <span id="my-name" className="footer-txt">
                    &copy; Julyza Peña
                </span>
                <span className="footer-txt">2023</span>
            </div>
        </div>
    );
}

export default Footer;
