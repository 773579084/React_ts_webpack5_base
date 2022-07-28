import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Detail() {
  const { id, context } = useParams()
  const data = useLocation()

  return (
    <div>
      <h3>{id}</h3>
      <h3>{context}</h3>
    </div>
  )
}
