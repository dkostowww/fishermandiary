import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => {
    return (
        <nav className="fd-left-nav">          
            <ul>
                <li>
                    <a href="/" className="active">
                        <FontAwesomeIcon icon='home' className='fa' />
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="data-visualization.html">
                        <FontAwesomeIcon icon='bar-chart' className='fa' />
                        Charts
                    </a>
                </li>
                <li>
                    <a href="login.html">
                        <FontAwesomeIcon icon='eject' className='fa' />
                        Sign Out
                    </a>
                </li>
            </ul>  
        </nav>
    )
}

export default Navigation