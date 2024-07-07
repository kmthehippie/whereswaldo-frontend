import {RouterProvider, createBrowserRouter} from "react-router-dom"

//import loader
import { validateMapName } from "./utils/validateMap"
import Home from './components/Main/Home'
import GameLayout from "./components/Game/GameLayout"
import Error from "./components/Error"
import BasicLayout from "./components/Main/BasicLayout"
import Leaderboard from "./components/Main/Leaderboard"
import Game from "./components/Game/Game"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />},
      { path: "leaderboard", element: <Leaderboard />},
    ]
  },
  {
    path: "/game",
    element: <GameLayout />,
    errorElement: <Error />,
    children: [
      { path: ":mapName",
        element: <Game />,
        loader: validateMapName,
        errorElement: <Error />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App