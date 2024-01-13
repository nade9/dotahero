import {Form} from 'react-bootstrap';

function Search() {
    const input = document.getElementById('search');
    const hero_list = document.getElementById('hero-list');
    const hero = hero_list.children;
    for (let i = 0; i < hero.length; i++) {
        if (hero[i].textContent.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            hero[i].style.display = '';
        } else {
            hero[i].style.display = 'none';
        }
    }
}

export default function SearchBar() {
    return (
        <Form.Control
            autoFocus
            id="search"
            className="mx-3 my-2 w-auto"
            placeholder="Search a hero..."
            onChange={Search}
        />
    );
}