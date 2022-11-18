import { CSSProp } from "styled-components"

interface MyTheme {
  color: 'green'
} // declare custom theme type

declare module "react" {
  interface Attributes {
    css?: CSSProp<MyTheme>
  }
}
