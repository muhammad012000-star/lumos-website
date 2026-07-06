import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <h1>Error <span>(404)</span></h1>
        <h2>The page was not found, <Link to="/">return home.</Link></h2>
      </div>
    </section>
  )
}
