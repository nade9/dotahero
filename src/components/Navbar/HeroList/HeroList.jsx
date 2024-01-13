import HeroLink from './HeroLink.jsx';
import {NavDropdown, Form, DropdownToggle} from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import heroes from 'dotaconstants/build/heroes.json';
import './herolist.css';

export default function HeroList() {
    return (
        <>
            <NavDropdown className={'fw-semibold'} title="HEROES">
                <div className={'scrollable-menu'}>
                    <SearchBar/>
                    <div id="hero-list">
                        {Object.entries(heroes).map(hero => (
                            <HeroLink key={hero['1']['id']} {...hero}/>
                        ))}
                    </div>
                </div>
            </NavDropdown>
        </>
    );
}