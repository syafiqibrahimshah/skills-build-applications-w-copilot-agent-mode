import { CollectionState, useCollection } from '../api.jsx'

export default function Workouts() {
  const { items, loading, error } = useCollection('workouts')
  return <section><h1 className="view-heading">Workouts</h1><p className="view-subtitle">Suggested sessions for your next training block.</p><CollectionState loading={loading} error={error}><table className="table data-table"><thead><tr><th>Workout</th><th>Level</th><th>Duration</th><th>Exercises</th></tr></thead><tbody>{items.map((workout) => <tr key={workout._id}><td><strong>{workout.title}</strong><br /><small>{workout.description}</small></td><td className="text-capitalize">{workout.level}</td><td>{workout.durationMinutes} min</td><td>{workout.exercises?.join(', ')}</td></tr>)}</tbody></table></CollectionState></section>
}