import "../../styles/leaderboard.scss"

//TODO: Add fetch for data for leaderboard.
//TODO: Add map for the sorted data for each mapName type

const Leaderboard = () => {
  return (
    
    <div className="body-div">
      <div className="undrcity chart">
        <h2>Undrcity <br/><small>(Easy)</small></h2>
        <div className="undrcity-leaderboard">
  
        </div>
      </div>
      <div className="universe113 chart">
        <h2>Universe 113 <br/><small>(Medium)</small></h2>
        <div className="universe113-leaderboard">
        
        </div>
      </div>
      <div className="gotham chart">
        <h2>Gotham <br/><small>(Hard)</small></h2>
        <div className="gotham-leaderboard">   
        
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

