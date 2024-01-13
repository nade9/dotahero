import Logo from '../../assets/dotahero_transparent.png';
import {Dropdown, DropdownMenu, Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap';
import HeroList from './HeroList/HeroList.jsx';
import cdn from '../../cdn.js';

export default function NavigationBar() {
    return (
        <Navbar className={'bg-dark-subtle p-0 rounded-5 my-3 px-3'}>
            <Navbar.Brand href={'#'} className={'fw-bold me-0'}>
                <img className={'w-75'} src={Logo} alt="DOTAHERO Logo"/>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <HeroList />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}