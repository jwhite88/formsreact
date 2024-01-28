import { Outlet, Link } from "react-router-dom"

import './App.css'

function App() {


  return (
    <>
      <header>
        <nav>
          <ul className="py-4">
            <li className="inline-block pl-12 "><Link to="/">Form One</Link></li>
            <li className="inline-block pl-12 "><Link to="reuse">Form Two</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
