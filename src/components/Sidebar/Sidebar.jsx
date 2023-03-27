import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import "./sidebar.css"
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
           <div className='sidebarMenu'>
              <h3 className='sidebarTitle'>Dashboard</h3>
              <ul className='sidebarList'>
                <Link to="/" className="link">
                <li className='sidebarListItem active'>
                <DashboardIcon className='sidebarIcon'/>
                Home
                </li>
                </Link>
                <li className='sidebarListItem'>
                <LeaderboardIcon className='sidebarIcon' />
                Sales
                </li>
                <li className='sidebarListItem '>
                <TimelineIcon className='sidebarIcon'/>
                Analytics
                </li>

              </ul>
            </div>
            <div className='sidebarMenu'>
              <h3 className='sidebarTitle'>Other Menu</h3>
              <ul className='sidebarList'>
              <li className='sidebarListItem'>
              <DashboardIcon />
              Home
              </li>
              <li className='sidebarListItem'>
              <LeaderboardIcon />
              Sales
              </li>
              <li className='sidebarListItem'>
              <TimelineIcon />
              Analytics
              </li>

              </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
