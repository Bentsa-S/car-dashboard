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
                    <h2>Noties</h2>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img src={img1} alt=""/>
                        </div>

                        <div>
                            <p>monday,</p>
                            <p>Book for Greneral Service</p>
                        </div>
                    </div>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img src={img2} alt=""/>
                        </div>

                        <div>
                            <p>Thursday,</p>
                            <p>Vehicle LV OO1 has been</p>
                        </div>
                    </div>
                    <div className={'flexAssets'}>
                        <div className={'circleAssets'}>
                            <img src={img3} alt=""/>
                        </div>

                        <div>
                            <p>monday,</p>
                            <p>Maintenance Completed</p>
                        </div>
                    </div>
                </div>

                <div className={'statisticContainerAssets'}>
                    <h2>Available Sensors</h2>
                    <p>Asset - Fuel Consumed (10)</p>
                    <p>Asset - Odometer (km)</p>
                    <p>Asset - Runtime (km)</p>
                    <p>Asset - Speed (hr)</p>
                    <p>Engine Temperature (deg C)</p>
                    <button>See all</button>
                </div>
            </div>


        </div>
    )
}

export default AssetsStatistics;