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


const defaultState = {
    data1: {
        data:  {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [
                {
                    label: 'dscoijsd',
                    data: [30, 40, 50, 55, 53, 50, 48, 52, 65, 70, 73, 80],
                    fill: false,
                    backgroundColor: '#A162F7',
                    borderColor: '#A162F7',
                    borderWidth: 10
                },
            ],
        },

    }
}


export const ScheduleAssetsReducer = (state = defaultState, action) =>{
    switch (action.type){
        default:
            return state;
    }
}