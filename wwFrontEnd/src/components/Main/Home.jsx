import MainImg from "../../assets/WWMain.png"
import "../../styles/home.scss"

const Home = () => {
  return (
    <div className="body-div home-div">
      <div className="welcome-div">
        <img src={MainImg} alt="Waldo is peeking" className="waldo-main"/>
        <h2 className="welcome-sub">WELCOME TO</h2>
        <h1 className="welcome-main">Findie</h1>
      </div>
      <p className="notes">This game is best played on a wide screen</p>
    </div>
  )
}

export default Home