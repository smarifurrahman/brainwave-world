import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://brainwave-world-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Blogs</h2>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    blogs.map((blog, index) => <Blog
                        key={blog._id}
                        blog={blog}
                        index={index}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;