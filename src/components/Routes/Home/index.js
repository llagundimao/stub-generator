import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TabsEnum from './../common/Enums/TabsEnum'
import HeaderPa
import BodyPanel from './panels/BodyPanel'

function Home() {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.GENERATE)

  useEffect(() => {
    console.log('selectedTab: ', selectedTab)
  }, [selectedTab])

  return (
    <div className="App">
      <div className="header-panel">
        <HeaderPanel
          value={selectedTab}
          handleTabSelect={(t) => setSelectedTab(t)}
        />
      </div>
      <div className="body-panel">
        <BodyPanel />
      </div>
    </div>
  )
}

export default Home
