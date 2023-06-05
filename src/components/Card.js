import card1 from '../img/card1.png'
import star from '../img/Star 1.png'

export default function Card() {
    return (
        <div className='cards--container'>
            <div className='card1'>
                <img className='card--img' src={card1}></img>
                <div className='card--stats'>
                    <img className='star' src={star}></img>
                    <p>
                        <span>5.0 </span>
                        <span className='grey'>(6)•USA</span>
                    </p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>
                    <b>From $136 </b>
                    / person
                </p>
            </div>
        </div>
    )
    }