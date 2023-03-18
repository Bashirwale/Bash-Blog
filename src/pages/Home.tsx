
import BlogList from "../components/BlogList"
import useFetch from "../useFetch"


export interface Blog{
  title:string,
  body:string,
  author:string,
  id:number,
}

const Home = (): JSX.Element =>{
  const {data: blogs,isLoading,error} = useFetch<Blog[]>('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs as Blog[]} />}
    </div>
  )
}

export default Home
