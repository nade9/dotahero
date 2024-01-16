import {Col} from 'react-bootstrap';
import hero_abilities from 'dotaconstants/build/hero_abilities.json';
import heroes from 'dotaconstants/build/heroes.json';
import HeroAbility from './HeroAbility.jsx';
import {useContext} from 'react';
import {Context} from '../../../context.jsx';

export default function HeroAbilities() {
    const context = useContext(Context);
    const hero = heroes[context.selected];
    return (
        <Col>
            {hero_abilities[hero.name].abilities.map((ability, i) => (
                <HeroAbility key={i} ability={ability}/>
            ))}
        </Col>
    );
}