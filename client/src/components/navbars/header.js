import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";


const Header = () => {
    return(
        <>
        <div className=".navlogin">
        <Navbar  bg="dark" variant="dark">
            <Navbar.Brand href="/">Media-List</Navbar.Brand>
            
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
        </Navbar>
        </div>

        </>
    )
};

export default Header;