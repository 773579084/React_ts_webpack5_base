import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: 0, context: '我是第一个' },
    { id: 1, context: '我是第二个' },
    { id: 2, context: '我是第三个' },
  ])
  return (
    <div>
      <h2>Message 我是二级路由</h2>
      {message.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`detail/${item.id}/${item.context}`}>{item.context}</Link>
          </li>
        )
      })}
      --------------- 三级路由 ---------------------
      <Outlet />
    </div>
  )
}
