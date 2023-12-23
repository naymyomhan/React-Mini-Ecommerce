import { BrowserRouter } from "react-router-dom"
import MainRoute from "./router/MainRoute"

function App() {
  return (
    <BrowserRouter className="w-full">
      <MainRoute />
    </BrowserRouter>
  )
}

export default App
