// The file is provisional，don't modify it

import { type Context, createContext } from 'react'
import { type IContext } from 'ssr-types'
let STORE_CONTEXT: Context<IContext>
if (__isBrowser__) {
  STORE_CONTEXT =
    window.STORE_CONTEXT ||
    createContext<IContext>({
      state: {},
    })
  window.STORE_CONTEXT = STORE_CONTEXT
} else {
  STORE_CONTEXT = createContext<IContext>({
    state: {},
  })
}

export { STORE_CONTEXT }
