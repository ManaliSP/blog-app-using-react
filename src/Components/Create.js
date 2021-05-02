import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, isLoading] = useState(false);
    const history = useHistory();
    const addNewBlog = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        isLoading(true);

        fetch('http://localhost:3001/Blogs', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added.');
            isLoading(false);
            history.push('/');
        });
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={addNewBlog}>
                <label>Blog title :</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog content:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Writer :</label>
                {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Manali Patil">Manali Patil</option>
                    <option value="Prashant Patil">Prashant Patil</option>
                    <option value="Vaibhav Badgire">Vaibhav Badgire</option>
                    <option value="Shriram Patil">Shriram Patil</option>
                    <option value="Ajay Patil">Ajay Patil</option>
                </select> */}
                <input type="text" required value={author} onChange = {(e) => setAuthor(e.target.value)}/>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};
export default Create;
