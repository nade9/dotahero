import './App.css'
import NavigationBar from "./components/navbar.jsx";
import {Container} from "react-bootstrap";
export default function App() {
    return (
        <Container>
            <NavigationBar/>
            <h1>Hello World!</h1>
        </Container>
    )
}
