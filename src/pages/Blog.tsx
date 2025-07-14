import { useParams } from "react-router-dom"
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";


export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Error: Blog not found.</div>;
  }

  // Now blog is guaranteed to be type Blog, not undefined
  return <FullBlog blog={blog} />;
};
