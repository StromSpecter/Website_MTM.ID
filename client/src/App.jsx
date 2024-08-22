import { Route, Routes } from "react-router-dom"
import CompanyProfile from "./layouts/CompanyProfile"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import About from "./pages/About"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import Careers from "./pages/admin/Careers"
import BoardofDirectors from "./pages/admin/BoardofDirectors"
import ProductandServices from "./pages/admin/ProductandServices"
import Login from "./pages/Login"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CompanyProfile />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element = {<Login />} />
        <Route path="/dashboard" element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="careers" element={<Careers />} />
          <Route path="bod" element={<BoardofDirectors />} />
          <Route path="product-&-services" element={<ProductandServices />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
