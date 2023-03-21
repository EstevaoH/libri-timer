import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { History } from './Pages/History/History'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
