import {Col, Row} from 'react-bootstrap';
import {Context} from '../../context.jsx';
import {useContext} from 'react';
import heroes from 'dotaconstants/build/heroes.json';
import cdn from '../../assets/cdn.js';
import HeroAbilities from './HeroAbilities/HeroAbilities.jsx';

export default function HeroPage() {
    const context = useContext(Context);
    const hero = heroes[context.selected];
    return (
        <Row>
            <Col xs={12} sm={3} className="mb-3">
                <Row>
                    <img
                        src={cdn + hero.img}
                        alt={hero.localized_name}
                        className="col-6 col-sm-12 mb-2 rounded-5"/>
                    <Col>
                        <h2 className="fw-bold">{hero.localized_name}</h2>
                        <div className="bg-success text-center rounded-5 fw-semibold mb-2">{hero.base_health +
                            hero.base_str * 22}
                            <span className="text-muted">
                                +{(Math.floor((hero.base_health_regen + hero.base_str * 0.1) * 10) / 10).toFixed(1)}
                            </span>
                        </div>
                        <div className="bg-primary text-center rounded-5 fw-semibold mb-2">{hero.base_mana +
                            hero.base_int * 12}
                            <span className="text-muted">
                                +{(Math.floor((hero.base_mana_regen + hero.base_int * 0.05) * 10) / 10).toFixed(1)}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Col>
            <HeroAbilities/>
        </Row>
    );
}