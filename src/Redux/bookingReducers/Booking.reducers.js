import id1 from '../../icone/iconeSectionBooking/cars/id1.png'
import id2 from '../../icone/iconeSectionBooking/cars/id2.png'
import id3 from '../../icone/iconeSectionBooking/cars/id3.png'
import id4 from '../../icone/iconeSectionBooking/cars/id4.png'
import id5 from '../../icone/iconeSectionBooking/cars/id5.png'
import id6 from '../../icone/iconeSectionBooking/cars/id6.png'

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_NAME = 'UPDATE_NEW_POST_NAME'
const UPDATE_NEW_POST_PRISE = 'UPDATE_NEW_POST_PRISE'



let defaultState = {
    post : [
        {id: 1, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id1},
        {id: 2, name: 'Porshe 718 Cayman S', selected: true, users: 4, prise: '400$/d', carImg: id2},
        {id: 3, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id3},
        {id: 4, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id4},
        {id: 5, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id5},
        {id: 6, name: 'Porshe 718 Cayman S', selected: false, users: 4, prise: '400$/d', carImg: id6},

    ],
    add : {id: 0, name: 'er', selected: false, users: 0, prise: '0$/d', carImg: 'a'}
}


export const BookingCardsReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id: state.post.length + 1,
                name: state.add.name,
                prise: state.add.prise
            }
            state.post.push(newPost);
            state.add.id = 0;
            state.add.name = '';
            state.add.prise = '';
            return state;
        case UPDATE_NEW_POST_PRISE:
            state.add.prise = action.newPrise;
            return state;
        case UPDATE_NEW_POST_NAME:
            state.add.name = action.newName;
            return state;
        default:
            return state
    }
}


export const updateNewPostPriseActionCreator = (prise) => {
    return {
        type: UPDATE_NEW_POST_PRISE,
        newPrise: prise

    }
}

export const updateNewPostNameActionCreator = (name) => {
    return {
        type: UPDATE_NEW_POST_NAME,
        newName: name,

    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}