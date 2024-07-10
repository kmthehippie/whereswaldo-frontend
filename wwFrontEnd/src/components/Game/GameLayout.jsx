import { Outlet, useParams } from 'react-router-dom'
import GameNav from './GameNav'
//import scss
import "../../styles/app.scss"
import api from '../../api/axios'
import useGameContext from '../../utils/hooks/useGameContext'
import { useEffect } from 'react'
import randomize from '../../utils/randomize'


const GameLayout = () => {
  const { mapName } = useParams()
  const { gameData, setGameData, setImagesToMatch, gameWon } = useGameContext()
  
  const fetchGameData = async() => {
    try {
      const response = await api.get(`/game/${mapName}`)
      setGameData(response.data)
    } catch(error){
      console.log(error)
    }
  }

  //Set up code for updating the name and posting it to the server
  const postHandler = () => {

  }
  
  useEffect(()=>{
    fetchGameData()
  },[])

  useEffect(()=>{
    const toRandom = randomize(gameData?.imagesToMatch)
    setImagesToMatch(toRandom)
  }, [gameData])

  return (
    <main>
    <GameNav />
    <Outlet /> 
    {gameWon && (
      <div className="full-page-bg">
        <div className="modal">
          <h1 className="congrats-header">Congratulations!</h1>
          <p>You have found it all!</p>
          <p>You took TIMER to do it.</p>
          <form action="post">
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" name="name"/>
          </form>
          <button onClick={postHandler}>SAVE TO LEADERBOARDS</button>
        </div>
      </div>
    )}
    </main>
  )
}

export default GameLayout