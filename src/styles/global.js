import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
}

body{
  background-color: #808080;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
}

.HoverIcon {
  transition: all 0.1s ease-out ;
}

.HoverIcon:hover {
  transform: scale(1.1);
} 

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
input:-webkit-autofill {
  -webkit-text-fill-color: #C0C0C0 !important;
}
`
export default GlobalStyle
