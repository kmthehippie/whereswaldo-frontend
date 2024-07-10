import { Link, useParams } from 'react-router-dom'
import MainImg from "../../assets/WWMain.png"
import "../../styles/gamenav.scss"
import useGameContext from '../../utils/hooks/useGameContext'
import { useEffect, useState } from 'react'


const GameNav = () => {
  const {mapName} = useParams()
  const {imagesToMatch, imagesMatched, sec} = useGameContext()
  const [ imagesFound, setImagesFound ] = useState([])


  useEffect(()=>{
    console.log(imagesMatched)
    setImagesFound(imagesMatched)
  }, [imagesMatched])


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
          <span className="timer-counter">{sec}</span> 
        </div>
        <img src={MainImg} alt="Waldo is Peeking" className='small-waldo' />
      </div>
      <p>Search For:</p>
      <div className="group-divs">
      
      {imagesToMatch.map((img)=>{return (<div className="game-square-div nav-match-img" key={img._id}>
        {imagesFound.includes(img._id) && (
          <div className="found"> 
          <h1>FOUND</h1>
          </div>)}
        <img src={img.image} alt={img._id} />
      </div>)}
        
      )}
      </div>
     
      </div>
    </nav>
  )
}

export default GameNav