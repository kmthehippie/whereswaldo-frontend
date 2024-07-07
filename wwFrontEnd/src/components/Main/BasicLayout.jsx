import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'

const BasicLayout = () => {
  return (
    <>
    <MainNav />
    <Outlet />
    </>
  )
}

export default BasicLayout