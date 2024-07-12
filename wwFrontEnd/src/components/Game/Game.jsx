import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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
  //this is for ALL the clicks so far so that we can cf to matched. 
  const [allClickedCoords, setAllClickedCoords] = useState([])
  //this click is the % of the image for comparing to data
  const [ clickedCoords, setClickedCoords ] = useState([])
  const mapRef = useRef(null)
  const [ foundImages, setFoundImages ] = useState([])

  const checkCoords = useCompareCoords()

  const handleMapLoad = useCallback(() => {
    if(mapRef.current && mapRef.current.complete){
      console.log("map ref current and map ref current has completed. setting map loaded to true now.")
      setMapLoaded(true)
    }
  }, [setMapLoaded])
  const handleMatchClick = useCallback((clicked, topleft, btmright, imgId) => {
    const isMatch = checkCoords(clicked, topleft, btmright, imgId)
    if(isMatch){
    setModalOpen(false)
      setAllClickedCoords(prev => [...prev, { coords: clickedCoords, match: "green" }])
      setFoundImages(prev => [...prev, imgId])
    } else {
      setAllClickedCoords(prev => [...prev, { coords: clickedCoords, match: "red" }])
    setModalOpen(false)
    }
  }, [checkCoords, clickedCoords]
)
  const handleClickCoords = (event) => {
    setEventClick([event.clientX, event.clientY])
    setClickedCoords([])
    const click = findCoords(event)
    setClickedCoords(click)
    setModalOpen(true)
  }


  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  //Preload images
  useEffect(()=>{
imagesToMatch.forEach(img =>{
  const image = new Image()
  image.src = img.image
  image.alt = img._id
})
  },[imagesToMatch])

  const modalContent = useMemo(()=>(
    imagesToMatch.map((img)=>(
      <div
      className={`small-square-div ${foundImages.includes(img._id)}`}
      key={img._id}
      onClick={() => handleMatchClick(clickedCoords, img.topleft, img.btmright, img._id)}
      >
        <img src={img.image} alt={img._id} />
      </div>
    ))
  ), [imagesToMatch, foundImages, clickedCoords, handleMatchClick])

  return (
    <div className="body-div game-div"> 
      <div className="map-container">
        <img
          src={map}
          alt={gameData?.game?.mapName}
          className="map"
          onClick={handleClickCoords}
          ref={mapRef}
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
            {modalContent}
          </div>
        )}
    </div>


    </div>
  )
}

export default Game