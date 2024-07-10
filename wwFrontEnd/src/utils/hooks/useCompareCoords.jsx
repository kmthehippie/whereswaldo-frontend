
import React, { useCallback, useEffect } from 'react'
import useGameContext from './useGameContext'
import { compareCoords } from '../compareCoords'

const useCompareCoords = (clicked, topleft, btmright, imgId) => {
    const { imagesMatched, setImagesMatched, setGameWon } = useGameContext()

    const checkCoords = ((clicked, topleft, btmright, imgId) => {
        if(compareCoords(clicked, topleft, btmright)){
            setImagesMatched(prev => {
                const newMatched = [...prev, imgId];
                if(newMatched.length === 3){
                    setGameWon(true);
                }
                return newMatched;
            });
            return true
        }
        return false
    })
  
    
    return checkCoords;
}

export default useCompareCoords