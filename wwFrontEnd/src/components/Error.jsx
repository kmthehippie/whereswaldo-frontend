import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()

  return (
    <div>
      <h1>Oh No! An error has occurred.</h1>
      <p>Error Details: {err.message || "Unknown Error"}</p>
      <Link to="/"><h4>Back to Safety!</h4></Link>
      <small>{err.stack && <pre>{err.stack}</pre>}</small>
    </div>
  )
}

export default Error