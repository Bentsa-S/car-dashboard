import React from "react";
import '../Assets.section.style.css'
import img1 from '../../../../icone/iconeAssets/car.png'

const AssetsOfCar = () => {
    return(
        <div>
            <div className={'backgroundCarAssets'}>
                <div className={'width100'}>
                    <div className={'flexAssets'}>
                        <div>
                            <p className={'carFontAssets'}>Fuel Usage</p>
                            <p className={'carFontAssetsForPrise'}>2903.23 Ltr</p>
                        </div>
                        <div >
                            <p className={'carFontAssets'}>KM Driven</p>
                            <p className={'carFontAssetsForPrise'}>2903.23 Ltr</p>
                        </div>
                    </div>
                    <div className={'flexAssets'}>
                        <div >
                            <p className={'carFontAssets'}>Total Cost</p>
                            <p className={'carFontAssetsForPrise'}>$3 002 90.32</p>
                        </div>
                        <div>
                            <p className={'carFontAssets'}>Top Speed</p>
                            <p className={'carFontAssetsForPrise'}>2903.23 Ltr</p>
                        </div>
                    </div>
                </div>
                <img className={'imgCarAssets'} src={img1}/>
            </div>
        </div>
    )
}

export default AssetsOfCar;