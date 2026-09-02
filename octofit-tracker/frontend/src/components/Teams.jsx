import { CollectionState, useCollection } from '../api.jsx'

export default function Teams() {
  const { items, loading, error } = useCollection('teams')
  return <section><h1 className="view-heading">Teams</h1><p className="view-subtitle">Groups building momentum together.</p><CollectionState loading={loading} error={error}><table className="table data-table"><thead><tr><th>Team</th><th>Description</th><th>Members</th></tr></thead><tbody>{items.map((team) => <tr key={team._id}><td>{team.name}</td><td>{team.description}</td><td>{team.members?.map((member) => member.name).join(', ')}</td></tr>)}</tbody></table></CollectionState></section>
}