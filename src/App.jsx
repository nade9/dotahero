import {Context} from './context.jsx';
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import NavigationBar from './components/Navbar/NavigationBar.jsx';
import HeroPage from './components/HeroPage/HeroPage.jsx';

export default function App() {
    const [selected, setSelected] = useState('1');
    console.log(selected);

    return (
        <Context.Provider value={{selected, setSelected}}>
            <Container fluid={'md'}>
                <NavigationBar/>
                <HeroPage/>
            </Container>
        </Context.Provider>
    );
}
