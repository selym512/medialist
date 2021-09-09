import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";


const Header = () => {
    return(
        <>
        <div className="navlogin">
        <Navbar className="navlogin">
            <div className="logo">
                <Navbar.Brand className="logo" href="/">Media-List</Navbar.Brand>
            </div>
            <div className="gap">
            </div>
            <div className="navItems">
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
            </div>
        </Navbar>
        </div>

        </>
    )
};

export default Header;