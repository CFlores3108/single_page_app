import React from 'react'

export default function Header(props) {
  return (
    <header>
        <h1>Bienvenido a React {props.user}</h1>
    </header>
  )
}
