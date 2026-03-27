// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="App-Header-container">
    <div className="img-header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
    </div>
    <ul className="header-container">
      <Link to="/" className="nav-link">
        <li className="heading">Home</li>
      </Link>
      <Link to="/products" className="nav-link">
        <li className="heading">Products</li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="heading">Cart</li>
      </Link>
      <button className="button">Logout</button>
    </ul>
  </nav>
)

export default Header
