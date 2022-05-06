import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'next-server/dist/lib/router-context'
import { Router } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { store } from '~/store'
import theme, { ThemeProps } from '~/styles/theme'

interface MyRenderOptions {
  router?: Partial<Router>
  theme?: ThemeProps
}

export const myRender = (Component: any, options?: MyRenderOptions) => {
  const allOptions = {
    ...options,
  }

  allOptions.theme = options?.theme || theme

  return render(
    <RouterContext.Provider value={allOptions.router as any}>
      <Provider store={store()}>
        <ThemeProvider theme={allOptions.theme}>{Component}</ThemeProvider>
      </Provider>
    </RouterContext.Provider>
  )
}
