import React from "react";
import img1 from '../../../../icone/iconeSellCars/icone/1.png'
import img2 from '../../../../icone/iconeSellCars/icone/2.png'
import img3 from '../../../../icone/iconeSellCars/icone/3.png'
import {Bar} from "react-chartjs-2";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

const SellCarsOfOffer = (props) => {
    console.log(props.offerDetails)
    return(
        <div>
            <Doughnut data={props.offerDetails.data}/>

        </div>
        // <div>
        //     <div>
        //         <p>{props.name}</p>
        //         <p>{props.price} avarage price</p>
        //     </div>
        //     <div>
        //         <Bar type={'doughnut'} data={props}/>
        //         <p>Impression Share</p>
        //     </div>
        //     <div>
        //         <Bar type={"doughnut"} data={props.offerDetails.data}/>
        //     </div>
        //     <div>
        //         <div>
        //             <img src={img1}/>
        //         </div>
        //         <p>{props.prise}</p>
        //         <p>Model Spend</p>
        //     </div>
        //     <div>
        //         <div>
        //             <img src={img2}/>
        //         </div>
        //         <p>{props.prise}</p>
        //         <p>Model Spend</p>
        //     </div>
        //     <div>
        //         <div>
        //             <img src={img3}/>
        //         </div>
        //         <p>{props.prise}</p>
        //         <p>Model Spend</p>
        //     </div>
        // </div>
    )
}


export default SellCarsOfOffer;