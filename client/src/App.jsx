import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import About from "./pages/About"


export default function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />



    </Routes>
    
    </BrowserRouter>
  )
}
