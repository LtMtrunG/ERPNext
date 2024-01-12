import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HomeLogin from "./pages/HomeLogin"
import Freetrial1 from "./pages/Freetrial1"
import Freetrial2 from "./pages/Freetrial2"
import Successfulpayment from "./pages/Successfulpayment"
import { Route, Routes } from "react-router-dom"
import Mysubscription from "./pages/Mysubscription"
import { Amplify } from 'aws-amplify'
import config from './aws-exports';
import { createContext, useContext, useState } from 'react';
import { UserContext} from "./UserContext"
import CompanyRegistration from "./pages/CompanyRegistration"
Amplify.configure(config);

const App = () => {
    const [user, setUser] = useState("");
    
  return (
    
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="CompanyRegistration" element={<CompanyRegistration/>}></Route>
        <Route path="/HomeLogin" element={<HomeLogin />}></Route>
        <Route path="/Freetrial1" element={<Freetrial1 />}></Route>
        <Route path="/Freetrial2" element={<Freetrial2 />}></Route>
        <Route path="/Successfulpayment" element={<Successfulpayment />}></Route>
        <Route path="/Mysubscription" element={<Mysubscription />}></Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App;

