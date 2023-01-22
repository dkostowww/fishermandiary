import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GridPanel from '../common/Panels/GridPanel/GridPanel'
import { fetchFishingTrips } from '../../redux/actions/trips-actions'
import { generateGridHeadings } from '../../helper-functions'
import '../App.css'

const Dashboard = () => {
  const dispatch = useDispatch()
  const tripsData = useSelector((state) => state.fishingTrips)

  useEffect(() => {
    dispatch(fetchFishingTrips())
  }, [dispatch])

  return (
    <>
      <div className="fd-flex-row flex-content-row fd-overflow-hidden">
        <div className="col-12">
          <GridPanel
            heading="Latest 10 trips"
            tableColumnHeadings={generateGridHeadings()}
            tableData={tripsData.trips}
            dataLoading={tripsData.isFetching}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard