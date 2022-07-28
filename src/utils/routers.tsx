import React from 'react'
import { useLocation } from 'react-router-dom'
import { RouteObject } from '@/type'
import rootRouter from '@/routes'

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {}
  for (let item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}

// 路由守卫配置函数(此内部可以检测路由变化，可在此处配置路由权限设置)
export const AuthRouter = (props: any) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter)
  console.log(36, pathname, route)

  return props.children
}
