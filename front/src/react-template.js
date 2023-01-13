import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css'

library.add(fas, far, fab)

function App() {
  return (
    // LEFT COLUMN
    <div className="fd-flex-row">
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
          {/* <i className="fa fa-bars"></i> */}
          <FontAwesomeIcon icon="bars" />
        </div>
        <nav className="fd-left-nav">
          <ul>
            <li>
              <a href="/" className="active">
                <FontAwesomeIcon icon="home" className="fa" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="data-visualization.html">
                <FontAwesomeIcon icon="bar-chart" className="fa" />
                Charts
              </a>
            </li>
            <li>
              <a href="login.html">
                <FontAwesomeIcon icon="eject" className="fa" />
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="fd-content col-1 light-gray-bg">
        <div className="fd-top-nav-container">
          <div className="row">
            <nav className="fd-top-nav col-lg-12 col-md-12">
              <ul className="text-uppercase">
                <li><a href="/" className="active">Admin panel</a></li>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/">Overview</a></li>
                <li><a href="login.html">Sign in form</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="fd-content-container">
          <div className="fd-flex-row flex-content-row">
            <div className="fd-content-widget white-bg col-2">
              <FontAwesomeIcon icon="times" className="fa-times" />
              <div className="square" />
              <h2 className="fd-inline-block">Visual Admin Template</h2>
              <hr />
              <p>
                Works on all major browsers. IE 10+. Visual Admin is
                <a href="http://www.fd.com/tag/admin" target="_parent">free responsive admin template</a>
                {' '}
                for everyone. Feel free to use this template for your backend user interfaces. Please tell your friends about
                <a href="http://www.fd.com" target="_parent">fd.com</a>
                {' '}
                website. You may
                <a href="http://www.fd.com/contact" target="_parent">contact us</a>
                {' '}
                if you have anything to say.
              </p>
              <p>Nunc placerat purus eu tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur. Fusce mi lacus, semper sit amet mattis eu.</p>
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
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
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
                    <p>Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur.</p>
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
                    <p>Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <div className="panel panel-default fd-content-widget white-bg no-padding fd-overflow-hidden">
                <FontAwesomeIcon icon="times" className="fa-times" />
                <div className="panel-heading fd-position-relative"><h2 className="text-uppercase">User Table</h2></div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <td>No.</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Username</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>@jS</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Bill</td>
                        <td>Jones</td>
                        <td>@bJ</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Mary</td>
                        <td>James</td>
                        <td>@mJ</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Steve</td>
                        <td>Bride</td>
                        <td>@sB</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Paul</td>
                        <td>Richard</td>
                        <td>@pR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Second row ends */}
          <div className="fd-flex-row flex-content-row fd-overflow-hidden">
            {/* <!-- overflow hidden for iPad mini landscape view--> */}
            <div className="col-1 fd-overflow-hidden">
              <div className="fd-content-widget white-bg fd-overflow-hidden">
                <FontAwesomeIcon icon="times" className="fa-times" />
                <div className="fd-flex-row flex-content-row">
                  <div className="col-1 col-lg-6 col-md-12">
                    <h2 className="text-center">
                      Modular
                      <span className="badge">new</span>
                    </h2>
                    <div id="pie_chart_div" className="fd-chart" />
                    {/* <!-- Pie chart div --> */}
                  </div>
                  <div className="col-1 col-lg-6 col-md-12">
                    <h2 className="text-center">
                      Interactive
                      <span className="badge">new</span>
                    </h2>
                    <div id="bar_chart_div" className="fd-chart" />
                    {/* <!-- Bar chart div --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="text-right">
            <p>
              Copyright &copy; 2022 Fisherman Diary
              | Design: Template Mo
            </p>
          </footer>
        </div>
      </div>
    </div>

  )
}

export default App
