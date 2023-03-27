import React from 'react'
import "./home.css"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import Chart from '../../components/Chart/Chart'
//import Chart from '../../components/Chart/Chart'
function home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
}
export default home
