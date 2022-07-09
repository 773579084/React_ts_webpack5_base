import { makeAutoObservable } from 'mobx'

const store = makeAutoObservable({
  data: {
    num: 1,
  },
  changeNum: () => (store.data.num = store.data.num + 1), // action
})

export default store
