import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
/* 工具函数 */
import { currentHighLightFn } from '@/utils'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      {/* 路由连接 */}
      <NavLink className={currentHighLightFn} to="news">
        News
      </NavLink>
      <NavLink className={currentHighLightFn} to="message">
        Message
      </NavLink>
      {/* 注册路由 */}
      <Outlet />
    </div>
  )
}
