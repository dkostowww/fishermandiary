import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigation from '../../../layout/Navigation/Navigation'

const SidePanel = () => (
  <div className="fd-sidebar">
    <header className="fd-site-header">
      <h1>Fisherman Diary</h1>
    </header>
    <div className="profile-photo-container">
      <img src="images/profile-photo.jpg" alt="Profile" className="img-responsive" />
      <div className="profile-photo-overlay" />
    </div>

    {/* SEARCH BOX */}
    <form className="fd-search-form" role="search">
      <div className="input-group">
        <button type="submit" className="fa-search">
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
        \
        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
      </div>
    </form>
    <div className="mobile-menu-icon">
      <FontAwesomeIcon icon="bars" />
    </div>
    <Navigation />
  </div>
)

export default SidePanel
