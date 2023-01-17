import React from "react";
import MapBookingCards from "./post/Post.booking.container";
import MapAddBookingPost from "./add/Add.post.container";


const BookingSection = () => {

    return(
        <div>
            <MapAddBookingPost/>
            <MapBookingCards/>
        </div>
    )
}

export default BookingSection;