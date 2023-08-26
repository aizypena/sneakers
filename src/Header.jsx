import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <Navbar expand="lg" className="bg-0 container">
            <Container fluid className="container">
                <Navbar.Brand href="#" className="sneakers">
                    <h3 className="font-bold">sneakers</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0 flex ms-auto"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className={"navLinks"}>
                            Collections
                        </Nav.Link>
                        <Nav.Link href="#action2" className={"navLinks"}>
                            Men
                        </Nav.Link>
                        <Nav.Link href="#action3" className={"navLinks"}>
                            Women
                        </Nav.Link>
                        <Nav.Link href="#action4" className={"navLinks"}>
                            About
                        </Nav.Link>
                        <Nav.Link href="#action5" className={"navLinks"}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
