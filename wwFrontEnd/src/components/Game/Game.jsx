import { useEffect, useState } from "react"
import "../../styles/game.scss"
import useGameContext from '../../utils/hooks/useGameContext'
import { findCoords } from "../../utils/findCoords"
import useCompareCoords from "../../utils/hooks/useCompareCoords"

const Game = () => {
  const {gameData, imagesToMatch} = useGameContext()
  const map = gameData?.game?.mapImage
  const [ openModal, setModalOpen ] = useState(false)
  //this click is the event click for modal
  const [ eventClick, setEventClick ] = useState([0,0])
  //this click is the % of the image for comparing to data
  const [ clickedCoords, setClickedCoords ] = useState([])

  const checkCoords = useCompareCoords()

  const handleMatchClick = (clicked, topleft, btmright, imgId) => {
    const isMatch = checkCoords(clicked, topleft, btmright, imgId)
    if(isMatch){
    setModalOpen(false)
    }
    setModalOpen(false)
  }

  const handleClickCoords = (event) => {
    setEventClick([event.clientX, event.clientY])
    setClickedCoords([])
    const click = findCoords(event)
    setClickedCoords(click)
    setModalOpen(true)
  }

  //Add a function to handle clicking outside of the modal and pressing escape
  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  return (
    <div className="body-div game-div"> 
      <img src={map} 
      alt={gameData?.game?.mapName} 
      className="map"
      onClick={handleClickCoords}/>
      
      {openModal && (
        <div 
        className="onClick-modal"
        style={{
          top: `${eventClick[1]}px`,
          left: `${eventClick[0]}px `,
          transform: 'translate(-50%, -50%)'
        }}>
           {imagesToMatch.map((img) => (
            <div 
              className="small-square-div" 
              key={img._id} 
              onClick={() => handleMatchClick(clickedCoords, img.topleft, img.btmright, img._id)}
            >
              <img src={img.image} alt={img._id} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Game