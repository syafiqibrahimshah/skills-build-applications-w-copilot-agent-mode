import { useEffect, useState } from 'react'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function toCollection(payload) {
  if (Array.isArray(payload)) return payload
  return payload?.results ?? payload?.items ?? payload?.data ?? []
}

export function useCollection(url) {
  const [state, setState] = useState({ items: [], loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed (${response.status})`)
        return response.json()
      })
      .then((payload) => setState({ items: toCollection(payload), loading: false, error: '' }))
      .catch((error) => {
        if (error.name !== 'AbortError') setState({ items: [], loading: false, error: error.message })
      })
    return () => controller.abort()
  }, [url])

  return state
}

export function CollectionState({ loading, error, children }) {
  if (loading) return <div className="state-panel">Loading data...</div>
  if (error) return <div className="alert alert-danger">Unable to load data: {error}</div>
  return children
}