import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export default class useMobxStore {
  // 定义一个初始数据
  count = 0
  // 定义一个原始数组，用于测试computed计算属性
  list = [1, 2, 3, 4, 5, 6]

  constructor() {
    // 响应式处理
    makeAutoObservable(this)
    // makePersistable 数据持久化存储
    makePersistable(this, {
      name: 'mobxDemo',
      properties: ['count'],
      storage: window.localStorage,
    })
  }
  // 定义一个计算属性
  get filterList() {
    return this.list.filter((item) => item > 4)
  }

  //增加list数据内容
  addList = () => {
    this.list.push(7)
  }

  // 定义一个action函数，修改状态管理的数据
  addCount = () => {
    this.count++
    console.log(this.count)
  }
}
