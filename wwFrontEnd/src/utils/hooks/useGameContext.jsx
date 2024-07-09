import { useContext } from 'react'
import { GameContext } from '../../context/GameProvider'

const useGameContext = () => {
    return useContext(GameContext)
}

export default useGameContext

