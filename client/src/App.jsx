import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SeminarsList from "./Seminars/SeminarsList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SeminarsList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
