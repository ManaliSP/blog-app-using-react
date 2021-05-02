import BlogList from './BlogList';
import useFetch from './UseFetch';
const Home = () => {
    const {data:blogs,loading,error} = useFetch('http://localhost:3001/Blogs')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
};

export default Home;
