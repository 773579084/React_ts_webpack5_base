import React from 'react'
/* 路由页面 */
import About from '@/views/About'
import News from '@/views/News'
import Message from '@/views/Message/indx'
import Detail from '@/views/Detail'

export default {
  path: '/about',
  element: <About />,
  children: [
    {
      path: 'news',
      element: <News />,
    },
    {
      path: 'message',
      element: <Message />,
      children: [
        {
          path: 'detail/:id/:context',
          element: <Detail />,
        },
      ],
    },
  ],
}
