import React from "react";
import img1 from "../../../../icone/iconeSectionMain/carCards/icon/1.png";
import img2 from "../../../../icone/iconeSectionMain/carCards/icon/2.png";
import img3 from "../../../../icone/iconeSectionMain/carCards/icon/3.png";
import img4 from "../../../../icone/iconeSectionMain/carCards/icon/4.png";
import '../Car.section.style.css';

const CarCard = (props) =>{
    let marginRight = {
        marginRight: '15px',
    }
    let background = {
        background: props.background,
    }
    return(
        <div className={'backgroundCarCards'} style={background}>
            <div className= 'flexTitleCarCardsSection'>
                <img className='carImgStyle' src={img1}/>
                <div className='textTitleCarCards'>{props.recommend}</div>
            </div>
            <img className='car' src={props.img}/>

            <p className='t'>{props.name}</p>
            <div className='carFlex'>
                <div className='carFlex'>
                    <img className='carImgStyle' src={img2}/>
                    <p className={'textTitleCarCards'} style={marginRight}>{props.views}</p>
                    <img className='carImgStyle' src={img3}/>
                    <img className='carImgStyle' src={img4}/>
                </div>

                <p className='textTitleCarCards'>{props.price}</p>
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