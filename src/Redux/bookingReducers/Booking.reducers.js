import id1 from '../../icone/iconeSectionBooking/cars/id1.png'
import id2 from '../../icone/iconeSectionBooking/cars/id2.png'
import id3 from '../../icone/iconeSectionBooking/cars/id3.png'
import id4 from '../../icone/iconeSectionBooking/cars/id4.png'
import id5 from '../../icone/iconeSectionBooking/cars/id5.png'
import id6 from '../../icone/iconeSectionBooking/cars/id6.png'



let defaultState = [
    {id: 1, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id1},
    {id: 2, name: 'Porshe 718 Cayman S', selected: true, users: 4, prise: '400$/d', carImg: id2},
    {id: 3, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id3},
    {id: 4, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id4},
    {id: 5, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id5},
    {id: 6, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id6},
]


export const BookingCardsReducer = (state = defaultState, action) =>{
    switch (action.type) {
        default:
            return state
    }
}