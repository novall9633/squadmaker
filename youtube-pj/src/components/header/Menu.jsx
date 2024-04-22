import React from 'react'

const Menu = ({toggle}) => {
  return (
    <h1>
        <a href="/">
            <em aria-hidden='true' onClick={toggle}></em>
            <span>webs<br/>youtube</span>
        </a>
    </h1>
  )
}

export default Menu