import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SaladProcessError, SaladProcessSuccess, newSalads, addOrderItem, removeOrderItem } from '../../actions'
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './SaladItems.scss'
import minus from '../../resources/minus.png'
import plus from '../../resources/plus.png'

import useServices from '../../services/Services'


const SaladItems = () => {
    const saladsProcess  = useSelector(state => state.saladsProcess)
    const salad__list  = useSelector(state => state.salad__list)
    const order  = useSelector(state => state.order)
    const dispatch = useDispatch();
    const {getAllSalads} = useServices();
    
    useEffect(() => {
        getAllSalads()
        .then(value => {
            dispatch(newSalads(value))
            dispatch(SaladProcessSuccess()) 
        })
        .catch(() => {dispatch(SaladProcessError())})
    }, [])

    const plusOrder = (id) => {
        dispatch(addOrderItem(id))
    } 

    const minusOrder = (id) => {
        dispatch(removeOrderItem(id))
    }

    const counter = (id, quantity) => {
        const parametrs = {
            id,
            quantity
        }
        return(
            <div className="salad__counter">
                <img src={minus} alt="minus" onClick={() => minusOrder(id)}/>
                <span className="salad__value">{order[`${id}`] === undefined ? 0 : order[`${id}`]}</span>
                <img src={plus} alt="plus" onClick={() => plusOrder(parametrs)} />
            </div>
        )
    }
    const outOfStock = () => {
        return(
            <div className="salad__counter">
                <div className='salad__out_of_stock'>нет в наличии</div>
            </div>
        )
    }
    
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
                    {item.quantity ? counter(item.id, item.quantity) : outOfStock()}
                </li>
            )
        });
        return(
            <ul className='salad__grid'>
                {items}
            </ul>
        )
    }

    
    const setContent = () => {switch (saladsProcess) {
        case 'loading':
            return <Spinner/>;
        case 'success': 
            return renderItem()
        case 'error': 
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state');
        };
    }  
    const elements =  setContent();
    

    return(
        <div className="salad__list">
            {elements}
        </div>
    )
}

export default SaladItems;