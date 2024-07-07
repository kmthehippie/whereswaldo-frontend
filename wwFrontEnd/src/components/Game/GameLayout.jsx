import { Outlet } from 'react-router-dom'
import GameNav from './GameNav'

const GameLayout = () => {
  return (
    <>
    <GameNav />
    <Outlet /> 
    </>
  )
}

export default GameLayout