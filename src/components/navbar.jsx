import Logo from '../assets/dotahero_transparent.png'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import heroes from "dotaconstants/build/heroes.json"

const cdn = "https://cdn.cloudflare.steamstatic.com"

export default function NavigationBar() {
    return (
        <Navbar className="bg-dark-subtle p-0 rounded-5 my-3 px-3">
            <Navbar.Brand href="#" className="fw-bold me-0">
                <img className="w-75" src={Logo} alt="DOTAHERO Logo"/>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="HEROES" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">
                            <img className="me-2"
                                 src={cdn + heroes["106"]["icon"]}
                                 alt="Ember Spirit icon"/>
                            {heroes["106"]["localized_name"]}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}