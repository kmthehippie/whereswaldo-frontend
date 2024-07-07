import { allowedMapNames } from "../config/allowedMapNames"


export const validateMapName = ({ params }) => {
    
    if(!allowedMapNames.includes(params.mapName)) {
        throw new Error("Invalid Map Name")
    }
    return { mapName: params.mapName}
}