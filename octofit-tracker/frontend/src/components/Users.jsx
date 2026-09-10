import { CollectionState, useCollection } from '../api.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const usersApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  const { items, loading, error } = useCollection(usersApiUrl)
  return <section><h1 className="view-heading">Users</h1><p className="view-subtitle">Member progress and points.</p><CollectionState loading={loading} error={error}><table className="table data-table"><thead><tr><th>Member</th><th>Email</th><th>Points</th></tr></thead><tbody>{items.map((user) => <tr key={user._id}><td>{user.name}</td><td>{user.email}</td><td>{user.totalPoints}</td></tr>)}</tbody></table></CollectionState></section>
}