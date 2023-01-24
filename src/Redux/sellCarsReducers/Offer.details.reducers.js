


const defaultState = {
    data1: {
        data:  {
            datasets: [
                {
                    data: [33, 44, 44],
                    backgroundColor: [
                        '#F3F3F3',
                        'transparent',
                        '#70CF97',
                    ],
                    border: 'none'
                },
            ],
        },

    }
}


export const OfferDateSellCarsReducers = (state = defaultState, action) => {
    if(action.type === 'sd'){
    }else {
        return state;
    }
}