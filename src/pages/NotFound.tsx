import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page not Found</p>
      <Link to='/'>
         back to home page
      </Link>
    </div>
  )
}


export default NotFound
