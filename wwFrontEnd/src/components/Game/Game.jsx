import { useEffect, useState } from "react"
import "../../styles/game.scss"
import useGameContext from '../../utils/hooks/useGameContext'
import { findCoords } from "../../utils/findCoords"
import useCompareCoords from "../../utils/hooks/useCompareCoords"

const Game = () => {
  const { gameData, imagesToMatch, setMapLoaded } = useGameContext()
  const map = gameData?.game?.mapImage
  const [ openModal, setModalOpen ] = useState(false)
  //this click is the event click for modal
  const [ eventClick, setEventClick ] = useState([0,0])
  //this is for ALL the clicks so far so that we can cf to matched. if matched = green box, if not = red box. 
  const [allClickedCoords, setAllClickedCoords] = useState([])
  //TODO: create an overlay where it maps over this arr and creates a div
  //this click is the % of the image for comparing to data
  const [ clickedCoords, setClickedCoords ] = useState([])


  const checkCoords = useCompareCoords()
  const handleMapLoad = () => {
    setMapLoaded(true)
  }
  const handleMatchClick = (clicked, topleft, btmright, imgId) => {
    const isMatch = checkCoords(clicked, topleft, btmright, imgId)
    if(isMatch){
    setModalOpen(false)
      //TODO: if match then add coords into allEventClicks with prop match: true (I need the event.clicks to get the coords)
      setAllClickedCoords(prev => [...prev, { coords: clickedCoords, match: "green" }])
    } else {
      //TODO: if don't match then add coords into allEventClicks with prop match: false
      setAllClickedCoords(prev => [...prev, { coords: clickedCoords, match: "red" }])
    setModalOpen(false)
    }

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
      <div className="map-container">
        <img
          src={map}
          alt={gameData?.game?.mapName}
          className="map"
          onClick={handleClickCoords}
          ref={(img) => {
            if (img && img.complete) {
              handleMapLoad()
            }
          }}
          onLoad={handleMapLoad} />


        {allClickedCoords.map((click) => (
          <div
            className="clicked-div"
            key={click.coords}
            style={{
              position: "absolute",
              top: `${click.coords[1]}%`,
              left: `${click.coords[0]}%`,
              transform: `translate(-${click.coords[0]}%, -${click.coords[1]}%)`,
              border: `3px solid ${click.match}`
            }}>

          </div>
        ))}



        {openModal && (
          <div
            className="onClick-modal"
            style={{
              top: `${eventClick[1]}px`,
              left: `${eventClick[0]}px `,
              transform: 'translate(-50%, -50%)',

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


    </div>
  )
}

export default Game