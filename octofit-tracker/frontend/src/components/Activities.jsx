import { CollectionState, useCollection } from '../api.jsx'

export default function Activities() {
  const { items, loading, error } = useCollection('activities')
  return <section><h1 className="view-heading">Activities</h1><p className="view-subtitle">Recent workout activity from the community.</p><CollectionState loading={loading} error={error}><table className="table data-table"><thead><tr><th>Member</th><th>Activity</th><th>Duration</th><th>Calories</th></tr></thead><tbody>{items.map((activity) => <tr key={activity._id}><td>{activity.user?.name}</td><td>{activity.type}</td><td>{activity.durationMinutes} min</td><td>{activity.caloriesBurned}</td></tr>)}</tbody></table></CollectionState></section>
}