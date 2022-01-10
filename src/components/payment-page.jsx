import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import naruto from '@a/naruto.png'
import image1 from '@a/1stimage.png'
import image2 from '@a/2ndimage.png'
import "@s/payment-page.css"
export default function PaymentPage(){
    return(
        <div className='payment-page-component'>
            <div className='payment-page-boarder'>
                <section className='payment-title-container'>
                    <div className='payment-title'>Payment</div>
                </section>

                <article className='payment-page-main-content'>
                    <section className='payment-slide-show-container'>
                        <Carousel width='400px' height='200px'>
                            <div>
                                <img src={image1} className='carousel-image' />

                            </div>
                            <div>
                                <img src={image2} className='carousel-image'  />
                               
                            </div>
                            <div>
                                <img src={naruto} className='carousel-image' />
                            </div>
                        </Carousel>
                    </section>

                    <form className='card-credtial-container'>
                        <div className='firstname-container'>
                            <label className='firstname-label'>First Name</label>
                            <input type='text' className='firstname-input'/>
                        </div>

                        <div className='cardnumber-container'>
                            <label className='cardnumber-label'>Card Account</label>
                            <input type='text' className='cardnumber-input'/>
                        </div>
                        
                        <div className='expiry-container'>
                            <label className='expiry-date-label'>Expiry Date</label>
                            <div className='month-year-container'>
                                <input type='text' placeholder='Month' className='month-input'/>
                                <input type='date' placeholder='Year' className='year-input'/>
                            </div>
                        </div>

                        <div className='cvv-container'>
                            <label className='cvv-label'>CVV</label>
                            <input type='text'className='cvv-input'/>
                        </div>
                        
                        <div className='payment-submit-container'>
                            <input type='submit' className='payment-submit-button'/>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    )
}