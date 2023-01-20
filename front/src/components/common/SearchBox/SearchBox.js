import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBox = () => {
  return (
    <form className="fd-search-form" role="search">
      <div className="input-group">
        <button type="submit" className="fa-search">
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
        \
        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
      </div>
    </form>
  )
}

export default SearchBox