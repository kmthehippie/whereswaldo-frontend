import { useState } from "react"
import "../../styles/game.scss"
import useGameContext from '../../utils/hooks/useGameContext'

const Game = () => {
  const {gameData, imagesToMatch} = useGameContext()
  const map = gameData?.game?.mapImage
  const [ openModal, setModalOpen ] = useState(false)
  
  const handleMatchClick = () => {}
  const handleClickCoords = () => {}
  return (
    <div className="body-div game-div">
      <img src={map} 
      alt={gameData?.game?.mapName} 
      className="map"
      onClick={handleClickCoords}/>
      
      {openModal && (
        <div className="onClick-modal">
          {imagesToMatch.map((img)=>{
            <div className="small-square-div" 
            key={img._id} onClick={handleMatchClick}>
              <img src={img.image} alt={img._id} />
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export default Game