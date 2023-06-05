
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import image4 from '../img/image4.png';
import image5 from '../img/image5.png';
import image6 from '../img/image6.png';
import image7 from '../img/image7.png';
import image8 from '../img/image8.png';
import image9 from '../img/image9.png';


export default function Grid() {
    return (
        <section className='section1'>
            <div className='div1'>
                <img className='grid-img' src={image1}></img>
            </div>

            <div className='div2'>
                <img className='grid-img' src={image2}></img>
                <img className='grid-img' src={image3}></img>
            </div>

            <div className='div3'>
                <img  className='grid-img' src={image4}></img>
                <img className='grid-img' src={image5}></img>
            </div>

            <div className='div4'>
                <img className='grid-img' src={image6}></img>
                <img className='grid-img' src={image7}></img>
            </div>

            <div className='div5'>
                <img src={image8}></img>
                <img src={image9}></img>
            </div>
        </section>
    )
}
