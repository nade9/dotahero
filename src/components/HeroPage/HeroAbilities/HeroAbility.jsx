import {Col, Row} from 'react-bootstrap';
import abilities from 'dotaconstants/build/abilities.json';
import cdn from '../../../assets/cdn.js';

export default function HeroAbility(ability) {
    if (ability.ability === 'generic_hidden') {
        return '';
    }
    const spell = abilities[ability.ability];
    if (spell.behavior.includes('Hidden')) {
        return '';
    }

    return (
        <Row className="mb-2">
            <Col xs={'auto'} className="mb-2 mb-sm-0">
                <img src={cdn + spell.img}
                     alt={spell.dname}
                     className="object-fit-scale rounded-5"/>
            </Col>
            <Col className="col g-0">
                <h3 className="fw-bold">{spell.dname.toUpperCase()}</h3>
                <p>{spell.desc}</p>
            </Col>
        </Row>
    );
}