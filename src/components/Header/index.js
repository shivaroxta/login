import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="website-header-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website-logo"
        className="header-logo"
      />
    </div>
    <div className="header-elements">
      <ul className="header-list">
        <li className="list">Home</li>
        <li className="list">Products</li>
        <li className="list">Cart</li>
      </ul>
      <button type="button" className="logoutButton">
        Logout
      </button>
    </div>
  </div>
)

export default Header
