import React from 'react'
import "./FeaturedInfo.css"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>
                    Revenue
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1000</span>
                    <span className='featureMoneyRate'>
                        +11 <TrendingDownIcon className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month its good</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>
                    Sales
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1000</span>
                    <span className='featureMoneyRate'>
                        +11 <TrendingDownIcon className='featuredIcon '/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month its good</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>
                    Net Profit
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1000</span>
                    <span className='featureMoneyRate'>
                        +11 <TrendingDownIcon className='featuredIcon '/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month its good</span>
            </div>

        </div>
    )
}

export default FeaturedInfo
