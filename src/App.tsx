import { Routes, Route } from 'react-router-dom'
import { ComponentsPage } from './pages/ComponentsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentsPage />} />
    </Routes>
  )
}

export default App
