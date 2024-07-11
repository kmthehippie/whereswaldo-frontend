import { useEffect, useState } from "react"
import api from "../../api/axios"
import "../../styles/leaderboard.scss"

//TODO: Add fetch for data for leaderboard.
//TODO: Add map for the sorted data for each mapName type

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])


  const fetchLeaderboard = async()=>{
  try{
    const res = await api.get("/leaderboard")
    setLeaderboardData(res.data.savedGames)
  }catch(err){
    console.log(err)
  }
  }
  
  useEffect(()=>{
    fetchLeaderboard()
  }, [])

  const filterDataByMap = (mapName) => {
    return leaderboardData.filter(data => data.mapName === mapName)
  }

  return (

    <div className="body-div leaderboard-div">

      <div className="undrcity chart">
        <h2>Undrcity <br/><small>(Easy)</small></h2>
        <div className="undrcity-leaderboard">
        {filterDataByMap("undrcity").map((data, index) => (
            <div key={index} className="player-data">
              <p><span className="player-name">{data.playerName}</span> took <span>{data.timer} seconds</span></p>
              </div>
          ))}
   
        </div>
      </div>
      <div className="universe113 chart">
        <h2>Universe 113 <br/><small>(Medium)</small></h2>
        <div className="universe113-leaderboard">
        {filterDataByMap("universe113").map((data, index) => (
            <div key={index} className="player-data">
              <p><span className="player-name">{data.playerName}</span> took <span>{data.timer} seconds</span></p>
              </div>
          ))}
        </div>
      </div>
      <div className="gotham chart">
        <h2>Gotham <br/><small>(Hard)</small></h2>
        <div className="gotham-leaderboard">   
        {filterDataByMap("gotham").map((data, index) => (
            <div key={index} className="player-data">
              <p><span className="player-name">{data.playerName}</span> took <span>{data.timer} seconds</span></p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

