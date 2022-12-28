import React from "react";
import img1 from "../../../../icone/iconeSectionMain/carCards/icon/1.png";
import img2 from "../../../../icone/iconeSectionMain/carCards/icon/2.png";
import img3 from "../../../../icone/iconeSectionMain/carCards/icon/3.png";
import img4 from "../../../../icone/iconeSectionMain/carCards/icon/4.png";
import '../Car.section.style.css';

const CarCard = (props) =>{
    let background = {
        background: props.background,
    }
    return(
        <div style={background}>
            <div className= 'f'>
                <img className='carImgStyle' src={img1}/>
                <p>{props.recommend}</p>
            </div>
            <img className='car' src={props.img}/>

            <p className='t'>{props.name}</p>
            <div className='carFlex'>
                <div className='carFlex'>
                    <img className='carImgStyle' src={img2}/>
                    <p>{props.views}</p>
                    <img className='carImgStyle' src={img3}/>
                    <img className='carImgStyle' src={img4}/>
                </div>

                <p>{props.price}</p>
            </div>
        </div>
    )
}

const CarCarts = (props) => {
    let cards = props.cards.map(cart => <CarCard recommend = {cart.recommend} img = {cart.img} name = {cart.name} views = {cart.views} price = {cart.price} background = {cart.background}/>)

    return(
        <div className='flex'>
            {cards}
        </div>
    )
}


export default CarCarts;