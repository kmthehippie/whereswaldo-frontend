import { useParams } from 'react-router-dom'

const Game = () => {
  const {mapName} = useParams()
  return (
    <div>Game: {mapName}</div>
  )
}

export default Game