import React from "react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const AssetsSchedule = (state) => {
    let options = {
        plugins: {
            colors: {
                forceOverride: true
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                    ticks: {
                    stepSize: 1,
                },
            },
        },
    }

    return(
        <div className={'backgroundScheduleAssets'}>
            <h2>Activity</h2>
            <Line type={'line'} data={state.schedule.data1.data} options={options}/>
        </div>
    )
}


export default AssetsSchedule