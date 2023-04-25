import React from 'react'


export default function Spinner() {

    return (
      <div className="container">
      <progress className="progress is-small is-primary" max="100"></progress>
      </div>
    )
  }
