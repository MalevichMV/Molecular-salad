import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { processLoading, proccesError, proccesSuccess, newSalads } from '../../actions'

import './SaladItems.scss'
import minus from '../../resources/minus.png'
import plus from '../../resources/plus.png'

import useServices from '../../services/Services'


const SaladItems = () => {
    const process  = useSelector(state => state.process)
    const salad__list  = useSelector(state => state.salad__list)
    const dispatch = useDispatch();

    const {getAllSalads} = useServices();
    
    useEffect(() => {
        getAllSalads()
        .then(value => {
            dispatch(newSalads(value))
            dispatch(proccesSuccess()) 
        })
        .catch(dispatch(proccesError()))
    }, [])
    
    function renderItem() {
        const salads = salad__list;
        const items = salads.map((item) => {
            
            return(
                <li className="salad__item"
                    key={item.id}>
                    <img className="salad__img" src={item.img} alt="image not found"/>
                    <h3 className="salad__name">{item.title}</h3>
                    <div className="salad__description">{item.descr}</div>
                    <div className="salad__price">Цена: {item.price} руб.</div>
                    <div className="salad__counter">
                        <img src={minus} alt="minus" />
                        <span className="salad__value">0</span>
                        <img src={plus} alt="plus" />
                    </div>
                </li>
            )
        });

        return(
            <ul className='salad__grid'>
                {items}
            </ul>
        )
    }

    const elements = renderItem();

    return(
        <div className="salad__list">
            {elements}
        </div>
    )
}

export default SaladItems;