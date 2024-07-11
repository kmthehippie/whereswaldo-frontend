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
  const { sec, postData, setPostData, gameData, setGameData, setImagesToMatch, gameWon } = useGameContext()
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
 
  //TODO: Set up code for updating the name and posting it to the server
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
  //TODO: Set up code so that if navigate away from this page, it will prompt are you sure you want to navigate before saving your name. 
  
  useEffect(()=>{
    resetContext()
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