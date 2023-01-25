import React from "react";
import  '../Booking.sektion.style.css'
import img1 from '../../../../icone/iconeSectionBooking/icone/1.png'
import img2 from '../../../../icone/iconeSectionBooking/icone/2.png'

const Post = (props) => {
    return(
        <div className='BookingBackground'>
            <div className='BookingFlex'>
                <p className='BookingMargin'>{props.name}</p>
            </div>
            <p className={'BookingSupTitle'}>Coupe</p>
            <div className={'BookingFlex'}>
                <img className='BookingImgBackground' src={props.carImg}/>
            </div>
            <div className='BookingFlex'>
                <div className= 'BookingFlex'>
                    <img className='BookingImgIcon' src={img2}/>
                    <p className='BookingMargin'>{props.users}</p>
                    <img className='BookingImgIcon' src={img1}/>
                    <p className='BookingMargin'>Manual</p>
                </div>
                <div>
                    <p className={'BookingPrice'}>{props.price}</p>
                </div>
            </div>
        </div>
    )
}



export const PostsContainer = (props) => {
    const elementPost = props.booking.map(cards => <Post name = {cards.name} users = {cards.users} carImg = {cards.carImg} price = {cards.price} />)
    return(
        <div  className='BookingFlexWrap'>
            {elementPost}
            <Post/>
        </div>
    )
}