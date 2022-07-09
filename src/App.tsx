import React, { lazy } from 'react'
import './App.scss'

// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /* webpackPrefetch: true */
      '@/components/PreFetchDemo'
    ),
)
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /* webpackPreload: true */
      '@/components/PreloadDemo'
    ),
)

function App() {
  return <h2>展示</h2>
}
export default App
