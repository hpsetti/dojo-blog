import { Link } from "react-router-dom";

const Blogs = ({ blogPosts, title }) => {
  return (
    <div className="Blogs">
      <div className="Blogs__container">
        <h2 className="header-2 primary-color">{title}</h2>
        <div className="Blog__content-details d-flex justify-content-center flex-column align-items-center list-style-none">
          {blogPosts.map((blog) => (
            <div className="card mt-25 ml-25" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2 className="header-2">{blog.title}</h2>
                <p className="text-thumbnail tertiary-color">
                  Written by {blog.author}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
