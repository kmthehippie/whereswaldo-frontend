
import useGameContext from './useGameContext'
import { compareCoords } from '../compareCoords'

const useCompareCoords = () => {
    const {imagesMatched, setImagesMatched, setGameWon } = useGameContext()

    const checkCoords = ((clicked, topleft, btmright, imgId) => {
        if(compareCoords(clicked, topleft, btmright)){
            if(imagesMatched !== undefined){
                if(!imagesMatched.includes(imgId)){
                    setImagesMatched(prev => {
                        const newMatched = [...prev, imgId];
                        if(newMatched.length === 3){
                            setGameWon(true);
                            setImagesMatched([])
                        }
                        return newMatched;
                    });
                }
            }
            return true
        }
        return false
    })
  
    
    return checkCoords;
}

export default useCompareCoords