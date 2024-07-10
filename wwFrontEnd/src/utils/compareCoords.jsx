import useGameContext from "./hooks/useGameContext"


export const compareCoords = (clicked, topleft, btmright) =>{

    const clickX = clicked[0]
    const clickY = clicked[1]

    const xRange = [topleft[0], btmright[0]]
    xRange.sort((a,b)=>{return a-b})
    const yRange = [topleft[1], btmright[1]]
    yRange.sort((a,b)=>{return a-b})

    if (xRange[0] < clickX && clickX < xRange[1]) {
        if(yRange[0] < clickY && clickY < yRange[1]){
            console.log(xRange, yRange, clickX, clickY + "true")
            return true
        } else {
            console.log(xRange, yRange, clickX, clickY + "false")
            return false
        }
    } else {
        console.log(xRange, yRange, clickX, clickY + "false")
        return false
    }
}