import { useRoutes } from "react-router-dom"
import router from "./router"


function App() {
  const Outlet = useRoutes(router)
  return (
    <div className='App'>
      {/* <Outlet></Outlet> */}
      { Outlet }
    </div>
  )
}

export default App
