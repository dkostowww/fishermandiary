import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBox from '../../SearchBox/SearchBox'
import Navigation from '../../../layout/Navigation/Navigation'
import HeaderProfile from '../../Profile/HeaderProfile/HeaderProfile'
import Header from '../../../layout/Header/Header'

const SidePanel = () => (
  <div className="fd-sidebar">
    <Header />
    <HeaderProfile />
    <SearchBox />
    <div className="mobile-menu-icon">
      <FontAwesomeIcon icon="bars" />
    </div>
    <Navigation />
  </div>
)

export default SidePanel
