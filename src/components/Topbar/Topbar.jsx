import React from 'react';
import "./topbar.css" ; 
//import { NotificationsNone } from "@material-ui/icons";
//import { NotificationsActiveIcon } from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarwrapper'>
                <div className='topLeft'>
                    <span className='logo'>EvChain</span>
                </div>

                <div className='topRight'>
                   <div className='topbarIconContainer'>
                     
                     <TranslateIcon />
                   </div>
                   <div className='topbarIconContainer'>
                   <NotificationsActiveIcon />
                   </div>
                   <div className='topbarIconContainer'>
                     <SettingsIcon />
                   </div>
                   <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='topAvatar' /> 
                </div>

            </div>

        </div>
    )
}

export default Topbar
