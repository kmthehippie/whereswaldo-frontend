
import useGameContext from './useGameContext'

const useResetContext = () => {
    const { setSec, setGameWon, setGameData, setMapLoaded, setImagesToMatch, setImagesMatched, setRunTimer } = useGameContext()

    const resetContext = () => {
        setSec(0)
        setRunTimer(false)
        setGameWon(false)
        setImagesMatched([])
        setImagesToMatch([])
        setMapLoaded(false)
        setGameData({})
    }
 
  return resetContext
}

export default useResetContext