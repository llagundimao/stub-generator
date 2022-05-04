import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import SplitView from "./common/Utils/tools/SplitView";
import HeaderPanel from "./components/panels/HeaderPanel";
import BodyPanel  from "./components/panels/BodyPanel";
import TabsEnum from './common/Enums/TabsEnum'


// https://www.youtube.com/watch?v=cFgoSrOui2M


function App() {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.GENERATE)

  useEffect(() => {
    console.log('selectedTab: ', selectedTab)
  }, [selectedTab])

  return (
    <div className="App">
      <div className="header-panel">
        <HeaderPanel
          value={selectedTab}
          handleTabSelect={(t) => setSelectedTab(t) }
        />
      </div>
      <div className="body-panel">
        <BodyPanel />
      </div>
    </div>
  )
}

export default App
