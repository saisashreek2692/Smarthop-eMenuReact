import React from 'react'
import { assets } from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experince download <br /> Smarthop App.</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Google Play Store" />
            <img src={assets.app_store} alt="Apple App Store" />
        </div>
    </div>
  )
}

export default AppDownload