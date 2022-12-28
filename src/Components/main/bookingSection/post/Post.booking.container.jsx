import React from "react";
import {connect} from "react-redux";
import {PostsContainer} from "./Post.booking";

const mapStateToProps = (state) => {
    return{
        booking: state.mainBookingSection.cardsBooking
    }
}

const MapBookingCards = connect(mapStateToProps) (PostsContainer);
export default MapBookingCards;