import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TabsEnum from '../../common/Enums/TabsEnum'
import HeaderPanel from '../../components/panels/HeaderPanel'
import BodyPanel from '../../components/panels/BodyPanel'
import { useAuth } from '../Context/MasterContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.GENERATE)
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('=== useremail: ', user?.email)
    if (!user?.email) navigate('/signin')

  }, [user])
  
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
