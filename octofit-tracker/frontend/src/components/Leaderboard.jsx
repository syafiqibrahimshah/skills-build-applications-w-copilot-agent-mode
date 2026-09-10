import { CollectionState, useCollection } from '../api.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const leaderboardApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  const { items, loading, error } = useCollection(leaderboardApiUrl)
  const entries = items.flatMap((board) => board.entries ?? [])
  return <section><h1 className="view-heading">Leaderboard</h1><p className="view-subtitle">The weekly pace setters.</p><CollectionState loading={loading} error={error}><table className="table data-table"><thead><tr><th>Rank</th><th>Member</th><th>Score</th></tr></thead><tbody>{entries.map((entry) => <tr key={entry._id}><td>{entry.rank}</td><td>{entry.user?.name}</td><td>{entry.score}</td></tr>)}</tbody></table></CollectionState></section>
}