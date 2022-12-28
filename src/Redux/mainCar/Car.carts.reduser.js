import img1 from  "../../icone/iconeSectionMain/carCards/id1.png"
import img2 from  "../../icone/iconeSectionMain/carCards/id2.png"
import img3 from  "../../icone/iconeSectionMain/carCards/id3.png"

let defaultState = [
    {name:'Mini Cooper', recommend: '64% Recommend', img: img1, background: "#E1DFA4", price: "$34/h", views: '130k'},
    {name:'Porsche 911 Carrera', recommend: '74% Recommend', img: img2, background: "#E3ECF1", price: "$34/h", views: '60k'},
    {name:'Porsche 911 Carrera', recommend: '53% Recommend', img: img3, background: "#F4E3E5", price: "$34/h", views: '100k'}
]


export const carCartsReducer = (state = defaultState, action) =>{
    switch (action.type) {
        default:
            return state
    }
}


