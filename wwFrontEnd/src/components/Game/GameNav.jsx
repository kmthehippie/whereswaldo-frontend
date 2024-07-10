import { Link, useParams } from 'react-router-dom'
import MainImg from "../../assets/WWMain.png"
import "../../styles/gamenav.scss"
import useGameContext from '../../utils/hooks/useGameContext'
import { compareCoords } from '../../utils/compareCoords'


const GameNav = () => {
  const {mapName} = useParams()
  const {imagesToMatch, imagesMatched} = useGameContext()

  return (
    <nav>
      <div className="mid-nav">
      <Link to="/">
      <div className="logo-div">
      <h1 className="logo-home">Findie</h1>
      </div>
      </Link>
      <div className="game-square-div timer-div">
      
        <h2>{mapName.toUpperCase()}</h2>
        <div className="timer">
          <div className='timer-text'>TIMER</div>
          {/* INSERT TIMER BELOW THIS */}
          <span className="timer-counter">1</span> 
        </div>
        <img src={MainImg} alt="Waldo is Peeking" className='small-waldo' />
      </div>
      <p>Search For:</p>
      <div className="group-divs">
      
      {imagesToMatch.map((img)=>{return (<div className="game-square-div nav-match-img" key={img._id}>
        {!imagesMatched.indexOf(img._id) && (<p>FOUND</p>)}
        <img src={img.image} alt={img._id} />
      </div>)}
        
      )}
      </div>
     
      </div>
    </nav>
  )
}

export default GameNav