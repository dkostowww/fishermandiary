import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './layout/Footer/Footer'
import SidePanel from './common/panels/SidePanel/SidePanel'
import GridPanel from './common/panels/GridPanel/GridPanel'
import { fetchFishingTrips } from '../redux/actions/trips-actions'
import { generateGridHeadings } from '../helper-functions'

library.add(fas, far, fab)

const App = () => {
  const dispatch = useDispatch()
  const tripsData = useSelector((state) => state.fishingTrips)

  useEffect(() => {
    dispatch(fetchFishingTrips())
  }, [dispatch])

  return (
  // LEFT COLUMN
    <div className="fd-flex-row">
      <SidePanel />
      {/* Main content */}
      <div className="fd-content col-1 light-gray-bg">
        <div className="fd-content-container">
          <div className="fd-flex-row flex-content-row fd-overflow-hidden">
            {/* <!-- overflow hidden for iPad mini landscape view--> */}
            <div className="col-12">
              <GridPanel
                heading="Latest trips"
                tableColumnHeadings={generateGridHeadings()}
                tableData={tripsData.trips}
                dataLoading={tripsData.isFetching}
              />
            </div>
          </div>
          <div className="fd-flex-row flex-content-row">
            <div className="fd-content-widget white-bg col-2">
              <FontAwesomeIcon icon="times" className="fa-times" />
              <h2 className="fd-inline-block">Visual Admin Template</h2>
              <hr />
              <p>
                Works on all major browsers. IE 10+. Visual Admin is
                <a href="http://www.fd.com/tag/admin" target="_parent">
                  free responsive admin template
                </a>
                {' '}
                for everyone. Feel free to use this template for your backend user interfaces.
                Please tell your friends about
                <a href="http://www.fd.com" target="_parent">fd.com</a>
                {' '}
                website. You may
                <a href="http://www.fd.com/contact" target="_parent">contact us</a>
                {' '}
                if you have anything to say.
              </p>
              <p>
                Nunc placerat purus eu tincidunt consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur.
                Fusce mi lacus, semper sit amet mattis eu.
              </p>
            </div>
            <div className="fd-content-widget white-bg col-1 text-center">
              <FontAwesomeIcon icon="times" className="fa-times" />
              <h2 className="text-uppercase">Maris</h2>
              <h3 className="text-uppercase margin-bottom-10">Design Project</h3>
              <img src="images/bicycle.jpg" alt="Bicycle" className="img-circle img-thumbnail" />
            </div>
            <div className="fd-content-widget white-bg col-1">
              <FontAwesomeIcon icon="times" className="fa-times" />
              <h2 className="text-uppercase">Dictum</h2>
              <h3 className="text-uppercase">Sedvel Erat Non</h3>
              <hr />
              {/* <div className="progress">
                            <div
                              className="progress-bar
                              progress-bar-info"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 60%;"
                            />
                        </div>
                        <div className="progress">
                            <div
                              className="progress-bar
                              progress-bar-info"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 60%;"
                            />                        </div>
                        <div className="progress">
                          <div
                              className="progress-bar
                              progress-bar-info"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 60%;"
                            />
                        </div>                           */}
            </div>
          </div>
          <div className="fd-flex-row flex-content-row">
            <div className="col-1">
              <div className="fd-content-widget orange-bg">
                <FontAwesomeIcon icon="times" className="fa-times" />
                <div className="media">
                  <div className="media-left">
                    <a href="/">
                      <img className="media-object img-circle" src="./images/sunset.jpg" alt="Sunset" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h2 className="media-heading text-uppercase">Consectur Fusce Enim</h2>
                    <p>
                      Phasellus dapibus nulla quis risus auctor,
                      non placerat augue consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fd-content-widget white-bg">
                <FontAwesomeIcon icon="times" className="fa-times" />
                <div className="media">
                  <div className="media-left">
                    <a href="/">
                      <img className="media-object img-circle" src="images/sunset.jpg" alt="Sunset" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h2 className="media-heading text-uppercase">Consectur Fusce Enim</h2>
                    <p>
                      Phasellus dapibus nulla quis risus auctor,
                      non placerat augue consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              {/* <GridPanel heading="Fishing trips" /> */}
            </div>
          </div>
          {/* Second row ends */}

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
