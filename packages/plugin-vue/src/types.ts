import { type Component } from 'vue'
import type { Store, StoreOptions } from 'vuex'
import { type Route } from 'vue-router'
import type { ESMFeRouteItem, ISSRContext, ISSRMidwayKoaContext, ISSRNestContext } from 'ssr-types'

export type Fetch = (params: Params, ctx?: ISSRContext) => Promise<any>
export type ESMFetch = () => Promise<{
  default: Fetch
}>

export type IFeRouteItem = ESMFeRouteItem<{
  fetch?: ESMFetch
}>

export interface ParamsNest<T = {}, U = {}> {
  store: Store<T>
  router: Route
  ctx?: ISSRNestContext<U>
}

export interface ParamsKoa<T = {}, U = {}> {
  store: Store<T>
  router: Route
  ctx?: ISSRMidwayKoaContext<U>
}
export interface Params<T = {}, U = {}> {
  store: Store<T>
  router: Route
  ctx?: ISSRContext<U>
}

export interface RoutesType {
  Layout: Component
  App: Component
  layoutFetch?: (params: Params, ctx?: ISSRContext) => Promise<any>
  FeRoutes: IFeRouteItem[]
  store: StoreOptions<any>
}

export interface VueRouterOptions {
  base?: string
}
