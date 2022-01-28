;import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './components/HelloWorld.jsx';
import './style.css'

const randomComponent = (props) => {
  string = props.string
  return (<h1>{string}</h1>)
}


export default function App() {
  return(
    <div>
      <Router>
      <Routes>
        <Route path="new/morenew/page">
          {/* <HelloWorld /> */}
        </Route>
        <randomComponent />
        </Routes>
      </Router>
    </div>
  )
}
