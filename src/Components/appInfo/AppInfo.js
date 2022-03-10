import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextSlide } from '../../actions'

import './AppInfo.scss'
import slide1 from '../../resources/slide1.jpg'
import slide2 from '../../resources/slide2.jpg'
import slide3 from '../../resources/slide3.jpg'
import slide4 from '../../resources/slide4.jpg'
import slide5 from '../../resources/slide5.jpg'


const AppInfo = () => {
    const slides = [
        <img key={slide1} src={slide1} />,
        <img key={slide2} src={slide2} />,
        <img key={slide3} src={slide3} />,
        <img key={slide4} src={slide4} />,
        <img key={slide5} src={slide5} />,
    ]

    const currentSlide = useSelector(state => state.currentSlide)
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(nextSlide())
            
        }, 4000)

        return () => clearInterval(interval)
    }, [])
 
    return (
        <>
            <div className='info'>
                <div className="info__wrapper">
                    <h1 className="info__title">Молекулярная кухня</h1>
                    <div className="info__description">Создание блюд молекулярной кухни — это настоящее волшебство. Кажется, что повар делает взмах руки, и на столе у гостей появляется оригинальная, необычная еда. Но на деле не все так просто, как может показаться. Процессы достаточно трудоемки, а некоторые блюда готовятся несколько суток. Поэтому вы можете предоставить это нам. Вам необходимо лишь выбрать готовый салат из списка доступных. Либо же вы можете собрать свой!
                    </div>
                </div>

                <div className="info__slider">
                    <div className="info__slide show"
                            key={currentSlide}>
                        {slides[currentSlide]}
                    </div>
                </div>
            </div>   
        </>   
    )
}

export default AppInfo;