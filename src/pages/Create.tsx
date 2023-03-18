import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [title,setTitle] = useState<string>('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Blog = {title,body,author};
    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Blog),
    })
    .then(()=>{
      console.log('Blog successfully been posted')
      navigate('/');
    });
  }
  return (
    <div className='create'>
      <h2>Create new Blog</h2>
      <form onSubmit={handleSubmit} >
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Content:</label>
        <textarea  required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author:</label>
        <select required value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="wale">Wale</option>
          <option value="bash">Bash</option>
        </select>
        <button>Add Blog</button>
    </form>
    </div>
  )
}

export default Create
