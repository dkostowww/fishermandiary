/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { generateGridRowData } from '../../../../helper-functions'

const GridPanel = ({
  heading, tableColumnHeadings, tableData, dataLoading
}) => {
  const tableColumns = tableColumnHeadings.map((headingTitle) => (
    <td key={headingTitle}>{headingTitle}</td>
  ))
  const tableRows = tableData.map((row) => (
    <tr key={row}>
      {generateGridRowData(row)}
    </tr>
  ))

  return (
    <div className="panel panel-default fd-content-widget white-bg no-padding">
      <FontAwesomeIcon icon="times" className="fa-times" />
      <div className="panel-heading fd-position-relative">
        <h2 className="text-uppercase">{heading}</h2>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          {
                dataLoading
                  ? (
                    <tbody>
                      <tr>
                        <td>Data loading</td>
                      </tr>
                    </tbody>
                  )
                  : (
                    <>
                      <thead>
                        <tr>
                          {tableColumns}
                        </tr>
                      </thead>
                      <tbody>
                        {
                                tableRows.length === 0 ? <tr><td>No data found.</td></tr>
                                  : tableRows
                            }
                      </tbody>
                    </>
                  )
        }
        </table>
      </div>
    </div>
  )
}

export default GridPanel
