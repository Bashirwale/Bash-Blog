import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../useFetch";

interface Blog {
  id: number;
  title: string;
  author: string;
  body: string;
}
const BlogDetails : FC = () => {
  const {id} = useParams<{ id: string }>();
  const {data :blog,isLoading,error}= useFetch<Blog>('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate();

  const handleDelete = () : void => {
    fetch('http://localhost:8000/blogs/' + id, {
      method:'DELETE',
    })
    .then(() => {
      console.log('Blog successfully delete')
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      {blog && (
        <article>
          <h2>{blog?.title}</h2>
          <p>Written by {blog?.author} </p>
          <div> {blog?.body} </div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
