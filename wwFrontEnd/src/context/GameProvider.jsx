import { createContext, useState } from 'react'

const GameContext = createContext({})

const GameProvider = ({ children }) => {

    const [ gameData, setGameData ] = useState({})
    const [ mapLoaded, setMapLoaded ] = useState(false)
    const [ imagesToMatch, setImagesToMatch ] = useState([])
    const [ imagesMatched, setImagesMatched ] = useState([])
    const [ gameWon, setGameWon ] = useState(false)
    //useEffect when gameData is updated, use randomize function to setImagesToMatch
 
    return (
    <GameContext.Provider
        value={{
            gameWon, setGameWon, gameData, setGameData, mapLoaded, setMapLoaded, imagesToMatch, setImagesToMatch, imagesMatched, setImagesMatched
        }}>{children}</GameContext.Provider>
  )
}

export {GameProvider, GameContext}
 