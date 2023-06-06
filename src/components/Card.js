// import card1 from '../img/card1.png'
import star from '../img/Star 1.png'

export default function Card(props) {
    return (
        <div className='cards--container'>
            <div className='card1'>
               { props.availability === 0 ? <span className='card--availability'>Sold Out</span> :  <span className='card--availability'>Online</span>}
                <img className='card--img' src={props.img}></img>
                <div className='card--stats'>
                    <img className='star' src={star}></img>
                    <p>
                        <span>{props.rating} </span>
                        <span className='grey'>{props.reviewCount}•{props.country}</span>
                    </p>
                </div>
                <p>{props.title}</p>
                <p>
                    <b>From ${props.price} </b>
                    / person
                </p>
            </div>
        </div>
    )
    }