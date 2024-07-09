import { Link, NavLink } from "react-router-dom"
import "../../styles/nav.scss"
const MainNav = () => {

  return (
    <nav>
      <div className="mid-nav">
        <div className="group-divs">
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
        </div>
     
     
     {/* When active add image of wwimage. don't foget to do the scss for the image. */}
      <NavLink to="/leaderboard" className="leaderboard-btn">
      <div className="square-div">
      <p>Leaderboard</p>
      </div>
      </NavLink>

      <footer>
        <p>Another KM project</p>
      </footer>
      </div>
      
      
    </nav>
  )
}

export default MainNav