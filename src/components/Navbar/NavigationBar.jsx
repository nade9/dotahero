import Logo from '/dotahero_transparent.png';
import {Nav, Navbar} from 'react-bootstrap';
import HeroList from './HeroList/HeroList.jsx';

export default function NavigationBar() {
    return (
        <Navbar className={'bg-dark-subtle p-0 rounded-5 my-3 px-3'}>
            <Navbar.Brand href={'#'} className={'fw-bold me-0'}>
                <img className={'w-75'} src={Logo} alt="DOTAHERO Logo"/>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <HeroList/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}