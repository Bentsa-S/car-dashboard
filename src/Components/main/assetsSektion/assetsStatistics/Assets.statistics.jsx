import React from "react";
import module from '../Assets.section.style.css'
import img1 from '../../../../icone/iconeAssets/Noties/messagesIcon.png'
import img2 from '../../../../icone/iconeAssets/Noties/ekhtslamationMark.png'
import img3 from '../../../../icone/iconeAssets/Noties/wrench.png'

const AssetsStatistics = () => {
    return(
        <div>
            <div className={'flexAssets'}>
                <div className={'statisticContainerAssets'}>
                    <h2 className={'titleAssetsStatistic'}>Noties</h2>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img className={'imgAssetsStatistic'} src={img1} alt=""/>
                        </div>

                        <div>
                            <p className={'textAssetsStatistic'}>monday,</p>
                            <p className={'textAssetsStatistic'}>Book for Greneral Service</p>
                        </div>
                    </div>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img className={'imgAssetsStatistic'} src={img2} alt=""/>
                        </div>

                        <div>
                            <p className={'textAssetsStatistic'}>Thursday,</p>
                            <p className={'textAssetsStatistic'}>Vehicle LV OO1 has been</p>
                        </div>
                    </div>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img className={'imgAssetsStatistic'} src={img3} alt=""/>
                        </div>

                        <div>
                            <p className={'textAssetsStatistic'}>monday,</p>
                            <p className={'textAssetsStatistic'}>Maintenance Completed</p>
                        </div>
                    </div>
                </div>

                <div className={'statisticContainerAssets'}>
                    <h2 className={'titleAssetsStatistic'}>Available Sensors</h2>
                    <p className={'textAssetsStatistic'}>Asset - Fuel Consumed (10)</p>
                    <p className={'textAssetsStatistic'}>Asset - Odometer (km)</p>
                    <p className={'textAssetsStatistic'}>Asset - Runtime (km)</p>
                    <p className={'textAssetsStatistic'}>Asset - Speed (hr)</p>
                    <p className={'textAssetsStatistic'}>Engine Temperature (deg C)</p>
                    <button className={'buttonAssetsStatistic'}>See all</button>
                </div>
            </div>


        </div>
    )
}

export default AssetsStatistics;