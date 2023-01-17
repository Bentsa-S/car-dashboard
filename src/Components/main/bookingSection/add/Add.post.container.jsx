import React from "react";
import {
    addPostActionCreator, updateNewPostNameActionCreator,
    updateNewPostPriseActionCreator
} from "../../../../Redux/bookingReducers/Booking.reducers";
import {connect} from "react-redux";
import AddBookingPost from "./Add.post";

const mapStateToProps = (state) => {
    return{
        add: state.mainBookingSection.cardsBooking
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostPrise: (text) => {
            let action = updateNewPostPriseActionCreator(text);
            dispatch(action);
        },
        updateNewPostName: (text) => {
            let action = updateNewPostNameActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MapAddBookingPost = connect(mapStateToProps, mapDispatchToProps) (AddBookingPost);
export default MapAddBookingPost;