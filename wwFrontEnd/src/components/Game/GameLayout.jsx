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
  const { gameData, setGameData, setImagesToMatch } = useGameContext()

  const fetchGameData = async() => {
    try {
      const response = await api.get(`/game/${mapName}`)
      setGameData(response.data)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchGameData()
  },[])

  useEffect(()=>{
    const toRandom = randomize(gameData.imagesToMatch)
    setImagesToMatch(toRandom)
  }, [gameData])

  return (
    <main>
    <GameNav />
    <Outlet /> 
    </main>
  )
}

export default GameLayout