import React from "react";
import AssetsOfCar from "./assetsOfCar/Assets.of.car";
import AssetsStatistics from "./assetsStatistics/Assets.statistics";
import AssetsSchedule from "./assetsScheduie/Assets.scheduie";
import MapAssetsSchedule from "./assetsScheduie/Assets.schedule.container";

const AssetsSection = () => {
    return(
        <div className={'background'}>

            <div>
                <h1>Assets</h1>
                <div className={'flex'}>
                    <AssetsOfCar/>
                    <div>
                        <MapAssetsSchedule/>
                        <AssetsStatistics/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AssetsSection;