import Home from "./pages/Home"
import Login from "./pages/login"
import HomeLogin from "./pages/HomeLogin"
import Freetrial1 from "./pages/Freetrial1"
import Freetrial2 from "./pages/Freetrial2"
import Successfulpayment from "./pages/Successfulpayment"
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/HomeLogin" element={<HomeLogin/>}></Route>
          <Route path="/Freetrial1" element={<Freetrial1/>}></Route>
          <Route path="/Freetrial2" element={<Freetrial2/>}></Route>
          <Route path="/Successfulpayment" element={<Successfulpayment/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;