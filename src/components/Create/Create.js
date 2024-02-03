import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("title");
  const [content, setContent] = useState("content");
  const [author, setAuthor] = useState("mario");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });

    console.log(blog);
  };
  return (
    <div className="Create">
      <div className="create-container">
        <div className="create-header-container">
          <h1 className="header-2 primary-color">Create</h1>
        </div>
        <div className="create-body-container">
          <form onSubmit={handleSubmitForm}>
            <label for="title">Enter Blog Title:</label>
            <input
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label for="content">Enter Blog Content:</label>
            <input
              name="content"
              type="text"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <label for="author">Select Author:</label>
            <select
              name="authors"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario">Mario</option>
              <option value="yoshi">Yoshi</option>
            </select>
            <button>Add Blog</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
