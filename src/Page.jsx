import {Container} from 'react-bootstrap';
import NavigationBar from './components/Navbar/NavigationBar.jsx';
import HeroPage from './components/HeroPage/HeroPage.jsx';

export default function Page() {
    return (
        <Container fluid={'md'}>
            <NavigationBar/>
            <HeroPage/>
        </Container>);
}