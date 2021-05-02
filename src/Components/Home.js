import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new websites', body: 'Here I am presenting my new portfolio.', author: 'Manali patil', id: '1' },
        { title: 'My first blog', body: 'This is my first ever blog..!!', author: 'Prashant Patil', id: '2' },
        {
            title: 'Journey towards IIT Bombay',
            body: 'Here is my journey towards my dream.',
            author: 'Vaibhav Badgire',
            id: '3'
        }
    ]);
    const [name, setName] = useState('Manali');
    const handleClick = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    },[name])
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />
            <h3>{name}</h3>
            <button onClick={() => setName('Vaibhav')}>Change name</button>
        </div>
    );
};

export default Home;
