import React from 'react';
import './AppDownload.css'
import {assets} from "../../assets/assets.js";
function AppDownload() {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br/> Cuisine Corner App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt=''/>
                <img src={assets.app_store} alt=''/>
            </div>
        </div>
    );
}
/*testing*/
export default AppDownload;