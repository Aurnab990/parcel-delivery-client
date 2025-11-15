import { Outlet } from "react-router";
import Commonlayout from "./components/layouts/Commonlayout";


function App() {
  return (
    <Commonlayout>
      <Outlet />
    </Commonlayout>
  )
}

export default App;