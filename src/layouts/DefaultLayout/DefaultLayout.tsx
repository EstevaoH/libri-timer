import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer className="">
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
