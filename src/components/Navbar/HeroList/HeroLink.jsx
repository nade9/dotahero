import {NavDropdown} from 'react-bootstrap';
import cdn from '../../../assets/cdn.js';
import {Context} from '../../../context.jsx';
import {useContext} from 'react';

export default function HeroLink(hero) {
    const context = useContext(Context);

    function handleClick(id) {
        context.setSelected(id);
    }

    return (
        <NavDropdown.Item className={'bg-dark'} onClick={() => handleClick(hero.id)}>
            <img className="me-2"
                 src={cdn + hero.icon}
                 alt={hero.localized_name + ' icon'}/>
            {hero.localized_name}
        </NavDropdown.Item>
    );
}