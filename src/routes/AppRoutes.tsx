import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import { Profile } from "../pages/Profile/Profile"
import { Expiry } from "../pages/Expiry/Expiry"
import { Checklist } from "../pages/Checklist/Checklist"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expiry" element={<Expiry />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </BrowserRouter>
  )
}
