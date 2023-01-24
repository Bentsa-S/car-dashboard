

const defaultState = {
    data1: {
        data:  {
            labels: ['1'],
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


export const ScheduleSellCarsReducers = (state = defaultState, action) => {
    if(action.type === 'sd'){

    }else {
        return state;
    }
}