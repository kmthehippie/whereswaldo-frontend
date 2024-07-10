import { Outlet, useParams } from 'react-router-dom'
import GameNav from './GameNav'
//import scss
import "../../styles/app.scss"
import api from '../../api/axios'
import useGameContext from '../../utils/hooks/useGameContext'
import { useEffect, useState } from 'react'
import randomize from '../../utils/randomize'
import MainImg from "../../assets/WWMain.png"
import useResetContext from '../../utils/hooks/useResetContext'

const GameLayout = () => {
  const { mapName } = useParams()
  const { sec, postData, setPostData, gameData, setGameData, setImagesToMatch, gameWon } = useGameContext()
  const [ modalOpen, setModalOpen ] = useState(false)
  const resetContext = useResetContext()
  
  const fetchGameData = async() => {
    try {
      const response = await api.get(`/game/${mapName}`)
      setGameData(response.data)
    } catch(error){
      console.log(error)
    }
  }

 //TODO: timer
  //TODO: Set up code for updating the name and posting it to the server
  const postHandler = () => { 
 //todo: create a object containing name, mapname, timer (check what else is needed) then POST it to API. grab playername from input...how to do? 
  const saveGame = {
    playerName: "PLAYER NAME HERE",
    timer: sec
  }
  //TODO: USE Reset Context function
  resetContext()
 
  }
  //TODO: Set up code so that if navigate away from this page, it will prompt are you sure you want to navigate before saving your name. 
  
  useEffect(()=>{
    fetchGameData()
  },[])

  useEffect(()=>{
    console.log(gameWon)
    if(gameWon)
      {
        setModalOpen(true)
      }   
  }, [gameWon])

  useEffect(()=>{
    const toRandom = randomize(gameData?.imagesToMatch)
    setImagesToMatch(toRandom)
  }, [gameData])


  return (
    <main>
    <GameNav />
    <Outlet /> 
    {modalOpen && (
      <div className="full-page-bg">
        <div className="modal">
          <img src={MainImg} alt="Waldo is peeking" />
          <h1 className="congrats-header">Congratulations!</h1>
          <p>You have found it all!</p>
          <p>You took TIMER to do it.</p>
          <form action="post">
            <label htmlFor="playerName">Enter Your Name:</label>
            <br/>
            <input type="text" name="playerName"/>
          </form>
          <button onClick={postHandler}>SAVE TO LEADERBOARDS</button>
        </div>
      </div>
    )}
    </main>
  )
}

export default GameLayout