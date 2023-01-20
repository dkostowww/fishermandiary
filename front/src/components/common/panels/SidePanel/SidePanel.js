import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBox from '../../SearchBox/SearchBox'
import Navigation from '../../../layout/Navigation/Navigation'
import HeaderProfile from '../../Profile/HeaderProfile/HeaderProfile'

const SidePanel = () => (
  <div className="fd-sidebar">
    <HeaderProfile />
    <SearchBox />
    <div className="mobile-menu-icon">
      <FontAwesomeIcon icon="bars" />
    </div>
    <Navigation />
  </div>
)

export default SidePanel
