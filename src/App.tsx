import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import '@/style/App.scss'
/* 引入路由表 */
import routes from '@/routes'
/* 引入工具函数 */
import { currentHighLightFn } from '@/utils'
import './style/App.css'

export default function App() {
  /* 路由表 */
  const element = useRoutes(routes)

  return (
    <div>
      {/* 路由连接 */}
      <NavLink className={currentHighLightFn} to="/home">
        go home
      </NavLink>
      <NavLink className={currentHighLightFn} end to="/about">
        go about
      </NavLink>
      -----------------------------
      {/* 注册路由 */}
      {element}
    </div>
  )
}
