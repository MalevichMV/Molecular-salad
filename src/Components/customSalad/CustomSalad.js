import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { ingredientsProcessError, ingredientsProcessSuccess, newIngredients, createCustomSalad, addOrderCustomSalad, removeIngredients, addIngredients } from '../../actions'

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './CustomSalad.scss'

import useServices from '../../services/Services'

const CustomSalad = () => {
    const ingredientsProcess  = useSelector(state => state.ingredientsProcess)
    const ingredient__list  = useSelector(state => state.ingredient__list)
    const customSalad = useSelector(state => state.customSalad)
    const orderCustom  = useSelector(state => state.orderCustom)

    const dispatch = useDispatch();
    const {getAllIngredients} = useServices();

    useEffect(() => {
        getAllIngredients()
        .then(value => {
            dispatch(newIngredients(value))
            dispatch(ingredientsProcessSuccess()) 
        })
        .catch(() => {dispatch(ingredientsProcessError())})
    }, [])

    function renderItem() {
        const ingredients = ingredient__list;
        const items = ingredients.map((item) => {
            let display = {'display': 'none'};
            if (item.quantity)
                display = {'display': 'block'};
            return(
                <li className="customSalad__item"
                key={item.id}>
                    <h3 className="customSalad__name">{item.title}</h3>
                    <div className="customSalad__description">{item.descr}</div>
                    <div className="customSalad__price">{item.quantity ? `Цена: ${item.price} руб.` : 'нет в наличии'}</div>
                    
                        <input type="checkbox" className='customSalad__checkbox' id='check' name="check" checked={customSalad.indexOf(item.id) === -1 ? false : true} ></input>
                        <label htmlFor='check' style={display} onClick={() => {dispatch(createCustomSalad(item.id))}}></label>                    
                </li>
            )
        });
        return(
            <ul className='customSalad__grid'>
                {items}
            </ul>
        )
    }

    const renderOrder = () => {
        if (orderCustom.length === 0)
            return; 
        const customSalad_list = orderCustom;
        const items = customSalad_list.map((item, i) => {
            let price = 0;
            let composition = '';
            for (let i = 0; i < item.length; i++ )
            {
                for (let j = 0; j < ingredient__list.length; j++ )
                {
                    if (item[i] === ingredient__list[j].id)
                    {
                        price += +ingredient__list[j].price;
                        composition += `${ingredient__list[j].title}, `
                    }
                }
            }
            return(
                <div key={i} className='customSalad__tableRow'>
                    <div className='customSalad__tableItem'>{composition.substring(0, composition.length - 2)}</div>
                    <div className='customSalad__tableItem'>{price} руб.</div>
                    <div className='customSalad__delete' onClick={() => {dispatch(addIngredients(i))}}></div>
                </div>
            )
        });
        return (
            <>
                <div className='customSalad__tableTitle'>Ваши созданные салаты</div>
                <div className='customSalad__table'>
                    <div  className='customSalad__tableRow'>
                        <div className='customSalad__tableHeader'>Состав</div>
                        <div className='customSalad__tableHeader'>Цена</div>
                    </div>
                    {items}
                </div>
            </>
           
        )
    }

    const setContent = () => {switch (ingredientsProcess) {
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
    const order =  renderOrder();

    return(
        <div className='customSalad__ingredients'>
            {elements}
            <button className="customSalad__button" onClick={() => {dispatch(addOrderCustomSalad()); dispatch(removeIngredients())}}>Создать салат</button>
            {order}
        </div>
        
    )
}

export default CustomSalad;