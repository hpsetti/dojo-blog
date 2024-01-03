const Blogs = ({ blogPosts }) => {
  //   const blogPosts = [
  //     {
  //       id: 1,
  //       title: "header 1",
  //       content: "content 1",
  //       author: "Mario",
  //     },
  //     {
  //       id: 2,
  //       title: "header 2",
  //       content: "content 2",
  //       author: "Yoshi",
  //     },
  //     {
  //       id: 3,
  //       title: "header 3",
  //       content: "content 3",
  //       author: "Mario",
  //     },
  //   ];
  return (
    <div className="Blogs">
      <div className="Blogs__container">
        <div className="Blog__image-container">
          <img src="" alt="blog image container" />
        </div>
        <div className="Blog__content-details d-flex justify-content-center flex-column align-items-center list-style-none">
          {blogPosts &&
            blogPosts.map((blog) => (
              <li key={blog.id} className="card mt-25 mb-25">
                <div>{blog.title}</div>
                <div>{blog.author}</div>
                <div>{blog.content}</div>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
