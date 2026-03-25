import 'styled-components'
import { Theme } from './theme/tema'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
