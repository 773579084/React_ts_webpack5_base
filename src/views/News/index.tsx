import React from 'react'
import MobxDemo from '@/components/MobxDemo'
import { observer } from 'mobx-react-lite'

function News() {
  return (
    <div>
      <h2>News 我是二级路由</h2>
      <MobxDemo />
    </div>
  )
}

export default observer(News)
