import Logo from '../assets/dotahero_transparent.png';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import heroes from 'dotaconstants/build/heroes.json';
import HeroLink from './hero_link.jsx';
import cdn from '../cdn.js';

export default function NavigationBar() {
    return (
        <Navbar className={'bg-dark-subtle p-0 rounded-5 my-3 px-3'}>
            <Navbar.Brand href={'#'} className={'fw-bold me-0'}>
                <img className={'w-75'} src={Logo} alt="DOTAHERO Logo"/>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown className={"fw-semibold"} title="HEROES" id="basic-nav-dropdown">
                        {Object.entries(heroes).map((hero) => (
                            <HeroLink key={hero['1']['id']} {...hero}/>
                        ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}