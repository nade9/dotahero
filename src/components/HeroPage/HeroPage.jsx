import {Row} from 'react-bootstrap';
import {Context} from '../../context.jsx';
import {useContext} from 'react';
import heroes from 'dotaconstants/build/heroes.json';
import cdn from '../../assets/cdn.js';

export default function HeroPage() {
    const context = useContext(Context);
    return (
        <Row>
            <div className="col-12 col-sm-3 mb-3">
                <Row>
                    <img
                        src={cdn + heroes[context.selected].img}
                        alt="Ember Spirit"
                        className="col-6 col-sm-12 mb-2 rounded-5"/>
                    <div className="col">
                        <h2 className="fw-bold">{heroes[context.selected].localized_name}</h2>
                        <div className="bg-success ps-2 rounded-5 fw-semibold mb-2"><span>604 </span><span
                            className="text-muted">+2.7</span>
                        </div>
                        <div className="bg-primary ps-2 rounded-5 fw-semibold mb-2"><span>315 </span><span
                            className="text-muted">+1.0</span>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="col">
                <Row className="mb-2">
                    <div className="col-auto mb-2 mb-sm-0">
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ember_spirit_searing_chains.png"
                            alt="Searing Chains"
                            className="object-fit-scale rounded-5"/>
                    </div>
                    <div className="col g-0">
                        <h3 className="fw-bold">SEARING CHAINS</h3>
                        <p>Ember Spirit unleashes fiery bolas that wrap around nearby enemies, anchoring them in place
                            and
                            dealing damage each second.
                        </p>
                    </div>
                </Row>
            </div>
        </Row>
    );
}