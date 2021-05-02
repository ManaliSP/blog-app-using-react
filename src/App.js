import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useState } from 'react';
function App() {
    const [name, setName] = useState('Manali');
    const [age, setAge] = useState('21');
    const clickMe = () => {
        setName('Patil');
        setAge('22');
    };
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
