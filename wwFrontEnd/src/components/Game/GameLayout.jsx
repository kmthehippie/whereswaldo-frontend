import { Outlet, useNavigate, useParams } from 'react-router-dom'
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
  const { sec, gameData, setGameData, setImagesToMatch, gameWon } = useGameContext()
  const [ modalOpen, setModalOpen ] = useState(false)
  const resetContext = useResetContext()
  const [ nameValue, setNameValue ] = useState("")
  const navigate = useNavigate()

  
  const fetchGameData = async() => {
    try {
      const response = await api.get(`/game/${mapName}`)
      setGameData(response.data)
    } catch(error){
      console.log(error)
    }
  }
 
  const nameHandler = (e) => {
    e.preventDefault()
    setNameValue(e.target.value)
  }
  const submitHandler = async(e) => { 
  e.preventDefault()
  try{
    const res = await api.post(`/game/${mapName}`,
      JSON.stringify({
        playerName: nameValue,
        timer: sec
      }),
      {
        headers: {"Content-Type": "application/json"}
      }
    )
    navigate("/leaderboard")
  }catch(err){
    console.log(err)
  }
  resetContext()
 
  }
  
  useEffect(()=>{
    resetContext()
    fetchGameData()
  },[])

  useEffect(()=>{
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
            <input type="text" name="playerName" onChange={nameHandler}/>
          </form>
          <button type="submit" onClick={submitHandler}>SAVE TO LEADERBOARDS</button>
        </div>
      </div>
    )}
    </main>
  )
}

export default GameLayout