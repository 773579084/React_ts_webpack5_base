import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '@/store'

const MobxDemo = () => {
  const changeNumFn = () => {
    store.changeNum()
  }
  return (
    <div>
      <h2>{store.data.num}</h2>
      <button onClick={changeNumFn}>+1</button>
    </div>
  )
}

export default observer(MobxDemo)
