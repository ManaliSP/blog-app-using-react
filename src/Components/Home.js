import { useState } from 'react';
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
    const handleClick = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />
        </div>
    );
};

export default Home;
