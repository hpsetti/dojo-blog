import { useParams } from "react-router-dom";
import useFetch from "../../useFetch.js";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  return (
    <div className="BlogDetails">
      {isPending && <div>Loading...</div>}
      {error && <div>Error Occured</div>}
      {data && (
        <div>
          <h2 className="header-2">{data.title}</h2>
          <p className="text-content">{data.content}</p>
          <p className="text-thumbnail">Written by {data.author}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
