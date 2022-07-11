import React from 'react'
import { Navigate } from 'react-router-dom'
/* 路由页面 */
import Home from '@/views/Home'
/* 子路由 */
import aboutRoute from './modules/about'

const commentRoutes = [aboutRoute]

export default [
  {
    path: '/home',
    element: <Home />,
  },
  ...commentRoutes,
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
]
