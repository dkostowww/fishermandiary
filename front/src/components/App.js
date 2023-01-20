import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from "react-router-dom"
import './App.css'

import SidePanel from './common/Panels/SidePanel/SidePanel'
import Footer from './layout/Footer/Footer'

library.add(fas, far, fab)

const App = () => {
  return (
    <div className="fd-flex-row">
      <SidePanel />
      <div className="fd-content col-1 light-gray-bg">
        <div className="fd-content-container">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
