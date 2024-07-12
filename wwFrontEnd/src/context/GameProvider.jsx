import { createContext, useEffect, useState } from 'react'


const GameContext = createContext({})

const GameProvider = ({ children }) => {

const [ gameData, setGameData ] = useState({})
const [ mapLoaded, setMapLoaded ] = useState(false)
const [ imagesToMatch, setImagesToMatch ] = useState([])
const [ imagesMatched, setImagesMatched ] = useState([])
const [ gameWon, setGameWon ] = useState(false)
const [ runTimer, setRunTimer ] = useState(false)
const [ sec, setSec ] = useState(0)
const [ postData, setPostData ] = useState({})

useEffect(()=>{
    if(mapLoaded){
        const timer = setTimeout(()=>{
            setRunTimer(true)
        }, 100)
        return ()=> clearTimeout(timer)
    }
},[mapLoaded])

useEffect(()=>{
    let intervalId;
    if(runTimer){
        intervalId = setInterval(()=>{
            setSec((prevSec)=> prevSec+1)
        },1000)
    }
    return()=>{
        if(intervalId){
            clearInterval(intervalId)
        }
    }
}, [runTimer])

//TODO: when game has been won, send the data so that we can send the timer, name and etc post to api.
 
    return (
    <GameContext.Provider
        value={{
            postData, setPostData, sec, setSec, gameWon, setGameWon, gameData, setGameData, mapLoaded, setMapLoaded, imagesToMatch, setImagesToMatch, imagesMatched, setImagesMatched, runTimer, setRunTimer
        }}>{children}</GameContext.Provider>
  )
}

export {GameProvider, GameContext}
 