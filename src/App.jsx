;import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './components/HelloWorld.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import About from './components/About.jsx';
import './style.css'

const randomComponent = (props) => {
  string = props.string
  return (<h1>{string}</h1>)
}

export default function App() {
  return(
    <div>
      <Link to='/calc'>OPEN COUNTER</Link>
      <Routes>
        <Route path='/calc' element={<HelloWorld />} />
      </Routes>
      <footer>
      <i class="far fa-money-bill-alt">LINK1</i>
      <i class="far fa-coin"></i>
        LINK2
        LINK3
      </footer>
    </div>
  )
}
