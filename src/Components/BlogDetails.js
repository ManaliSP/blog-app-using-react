import { useHistory, useParams } from 'react-router';
import useFetch from './UseFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, loading } = useFetch('http://localhost:3001/blogs/' + id);
    const history = useHistory();
    const deleteBlog = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    };
    return (
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={deleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
    );
};
export default BlogDetails;
