import React from "react";
import {connect} from "react-redux";
import {PostsContainer} from "./Post.booking";
import AddBookingPost from "../add/Add.post";

const mapStateToProps = (state) => {
    return{
        booking: state.mainBookingSection.cardsBooking.post
    }
}


const MapBookingCards = connect(mapStateToProps) (PostsContainer);
export default MapBookingCards;