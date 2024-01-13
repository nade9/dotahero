import {NavDropdown} from 'react-bootstrap';
import cdn from '../../../cdn.js';

export default function HeroLink(id) {
    return (
        <NavDropdown.Item>
            <img className="me-2"
                 src={cdn + id['1']['icon']}
                 alt={id['1']['localized_name'] + ' icon'}/>
            {id['1']['localized_name']}
        </NavDropdown.Item>
    );
}