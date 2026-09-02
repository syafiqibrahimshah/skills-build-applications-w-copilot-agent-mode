import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['users', 'Users'],
  ['teams', 'Teams'],
  ['activities', 'Activities'],
  ['leaderboard', 'Leaderboard'],
  ['workouts', 'Workouts'],
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div><span className="brand-mark">O</span><span className="brand-name">OctoFit</span></div>
        <span className="status-badge">Live data</span>
      </header>
      <div className="app-layout">
        <nav className="app-nav" aria-label="OctoFit sections">
          {navigation.map(([path, label]) => <NavLink key={path} to={`/${path}`}>{label}</NavLink>)}
        </nav>
        <main className="app-content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
