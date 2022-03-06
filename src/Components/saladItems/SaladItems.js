import './SaladItems.scss'
import imgTest from '../../resources/info.png'
import slide1 from '../../resources/slide1.jpg'
import slide2 from '../../resources/slide2.jpg'
import slide3 from '../../resources/slide3.jpg'
import slide4 from '../../resources/slide4.jpg'
import slide5 from '../../resources/slide5.jpg'
import minus from '../../resources/minus.png'
import plus from '../../resources/plus.png'


const SaladItems = () => {
    return(
        <div className="salad__list">
            <ul className='salad__grid'>
                <li className="salad__item">
                    <img className="salad__img" src={imgTest} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
                <li className="salad__item">
                    <img className="salad__img" src={slide1} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
                <li className="salad__item">
                    <img className="salad__img" src={slide2} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
                <li className="salad__item">
                    <img className="salad__img" src={slide3} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
                <li className="salad__item">
                    <img className="salad__img" src={slide4} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
                <li className="salad__item">
                    <img className="salad__img" src={slide5} alt="test" />
                    <h3 className="salad__name">Яйцо-помадка</h3>
                    <div className="salad__description">Это самый простой рецепт молекулярной кухни. Для приготовления блюда ставим кастрюлю с водой и яйцом в духовку, разогретую ровно до 64 градусов.</div>
                    <div className="salad__price">Цена: 1000 руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SaladItems;