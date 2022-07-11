import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '@/store'

const MobxDemo = () => {
  /* 注意 此处解构写道store一级即可，如果结构到store下面一级的属性级，则会破坏响应式数据 */
  const { useMobxStore } = useStore()
  return (
    <div>
      <h2>{useMobxStore.count}</h2>
      <button onClick={useMobxStore.addCount}>+1</button>
      {/* 计算属性 */}
      <div>{useMobxStore.filterList.join('~')}</div>
      <button onClick={useMobxStore.addList}>点我数组添加内容</button>
    </div>
  )
}

export default observer(MobxDemo)
