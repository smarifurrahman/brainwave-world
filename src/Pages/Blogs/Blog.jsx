
const Blog = ({ blog, index }) => {
    const { question, answer } = blog;
    console.log(blog)

    return (
        <div className='border border-deep-gray rounded-lg p-9'>
            <h5 className='mb-2 font-bold text-lg text-secondary-color'>{index + 1}. {question}</h5>
            <p className='text-gray text-justify'><span className='font-bold'>Answer: </span>{answer}</p>
        </div>
    );
};

export default Blog;