import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import HomeMenu from './views/HomeMenu'
import CalculateNumber from './views/CalculateNumber'
import CalculateMoneyShare from './views/CalculateMoneyShare'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/cn" element={<CalculateNumber />} />
          <Route path="/cms" element={<CalculateMoneyShare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App