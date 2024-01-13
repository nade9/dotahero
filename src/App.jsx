import NavigationBar from './components/Navbar/NavigationBar.jsx';
import {Container} from 'react-bootstrap';

export default function App() {
    return (
        <Container fluid="md">
            <NavigationBar/>
            <h1>Hello World!</h1>
        </Container>
    );
}
