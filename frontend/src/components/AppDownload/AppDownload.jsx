import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experiance <br /> FoodHub App</p>
    <div className="app-download-platforms">
        <img src={assets.playstore} alt="" style={{width:"200px"}}/>
        <img src={assets.appstore} alt="" style={{width:"200px"}}/>
    </div>
    </div>
  )
}

export default AppDownload
