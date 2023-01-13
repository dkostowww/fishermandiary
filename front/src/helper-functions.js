import React from 'react'

export const generateGridHeadings = () => [
  'Venue Name',
  'Category',
  'Fisherman',
  'Trip Length',
  'Fish Weight',
  'Created At'
]

export const generateGridRowData = (gridRowData) => {
  const rowData = []
  Object.entries(gridRowData).forEach(([key, value]) => {
    if (key !== 'id' && key !== '_id') {
      rowData.push(<td key={value}>{value}</td>)
    }
  })

  return rowData
}
