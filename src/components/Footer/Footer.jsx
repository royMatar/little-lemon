import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src='Logo.svg'/>
        <p>&copy; {new Date().getFullYear()} Little Lemon</p>
      </div>
    </footer>
  )
}

export default Footer