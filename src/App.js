import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import LoginView from './routes/LoginView'
import NotFoundView from './routes/NotFoundView'
import Home from './routes/Home'
import { AuthProvider } from './routes/Context/MasterContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<LoginView />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
