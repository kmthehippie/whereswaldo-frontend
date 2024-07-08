import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'
//import scss
import "../../styles/app.scss"

const BasicLayout = () => {
  return (
    <main>
    <MainNav />
    <Outlet />
    </main>
  )
}

export default BasicLayout