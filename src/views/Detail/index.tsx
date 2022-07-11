import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id, context } = useParams()

  return (
    <div>
      <h3>{id}</h3>
      <h3>{context}</h3>
    </div>
  )
}
