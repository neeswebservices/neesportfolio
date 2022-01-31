import neesimg from "./assets/images/nrrd.gif";
import "./assets/css/blog.css";

const Blog = () => {
	return (
		<>
			<div className='blog-container'>
				<div className='main-text'>
					<div className='loadingcontainer'>
						<img src={neesimg} alt='Underdevelopment ...' />
						<div className='text'>UnderDevelopment !!</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
