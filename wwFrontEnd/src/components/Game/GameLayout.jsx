import { Outlet } from 'react-router-dom'
import GameNav from './GameNav'
//import scss
import "../../styles/app.scss"

const GameLayout = () => {
  return (
    <>
    <GameNav />
    <Outlet /> 
    </>
  )
}

export default GameLayout