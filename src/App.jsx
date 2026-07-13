import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import History from './pages/History'
import CarDetail from './pages/CarDetail'
import Sell from './pages/Sell'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App