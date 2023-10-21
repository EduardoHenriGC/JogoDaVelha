import { JogoDaVelhaProvider } from "./JogoDaVelhaContext";


export const AppProvider = ({ children }) => {

  return (
    <JogoDaVelhaProvider>
      {children}
    </JogoDaVelhaProvider>
  )
}