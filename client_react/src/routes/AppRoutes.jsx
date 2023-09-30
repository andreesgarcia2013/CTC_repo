import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, CreatePage } from '../pages/Pages'
import {Navbar} from '../components/Components'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      
    </>
  )
}
