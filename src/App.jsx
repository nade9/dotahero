import Page from './Page.jsx';
import {Context} from './context.jsx';
import {useState} from 'react';

export default function App() {
    const [selected, setSelected] = useState('1');
    console.log(selected);

    return (
        <Context.Provider value={{selected, setSelected}}>
            <Page />
        </Context.Provider>
    );
}
