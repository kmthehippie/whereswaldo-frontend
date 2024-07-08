import { Link, NavLink } from "react-router-dom"
import "../../styles/nav.scss"
const MainNav = () => {

  return (
    <nav>
     
      <div className="mid-nav">
      <Link to="/">
      <div className="logo-div">
      <h1 className="logo-home">Findie</h1>
      </div>
      </Link>
      <Link to="/game/undrcity">
      <div className="square-div">
      <p>Play: Undrcity (Easy)</p>
      </div>
      </Link>
      <Link to="/game/universe113">
      <div className="square-div">
      <p>Play: Universe 113 (Medium)</p>
      </div>
      </Link>
      <Link to="/game/gotham">
      <div className="square-div">
      <p>Play: Gotham (Hard)</p>
      </div>
      </Link>
      <NavLink to="/leaderboard">
      <div className="square-div">
      <p>Leaderboard</p>
      </div>
      </NavLink>
      </div>
      
      <footer>
        <p>Another KM project</p>
      </footer>
    </nav>
  )
}

export default MainNav