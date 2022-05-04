import React from 'react'

const DetailView = ({classNames, children}) => {
  return (
    <div className="p-panel-detail">
      {children}
    </div>
  )
}

export default DetailView
