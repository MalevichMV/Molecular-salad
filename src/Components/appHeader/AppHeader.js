import './AppHeader.scss'
import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom'

import { toggleModal, changeName, changePhone } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import useServices from '../../services/Services'

const AppHeader = () => {
    const modal = useSelector(state => state.modal);
    const orderCustom = useSelector(state => state.orderCustom);
    const name = useSelector(state => state.name);
    const phone = useSelector(state => state.phone);
    const order = useSelector(state => state.order);
    const ingredient__list  = useSelector(state => state.ingredient__list)
    const salad__list  = useSelector(state => state.salad__list)
    const dispatch = useDispatch();

    const {postData} = useServices();

    let totalCost = 0;

    let DataForPost = {};
    let customSalads = [];
    let defaultSalads = [];

    const closeModal = (e) => {
        if (e.target.classList.value === 'modal'){
            dispatch(toggleModal())
        }
    }

    const sendData = () => {
        DataForPost = {
            'name': name,
            'phone': phone,
            'totalCost': totalCost
        }
        
        let formData = new FormData();
        for ( let key in DataForPost ) {
            formData.append(key, DataForPost[key]);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        postData(JSON.stringify(Object.fromEntries(formData.entries())))
        .then(data => {console.log(data)})
        .catch(console.log(1))
    }

    const renderTotalCost = () => {
        if (orderCustom.length || Object.keys(order).length !== 0)
        {
            return(
                <>
                    <div className="modal__cost">Общая стоимость: {totalCost} руб.</div>
                    <div className="modal__divider"></div>
                    <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"
                    onChange={(e) => dispatch(changeName(e.target.value))}></input>
                    <input required placeholder="Ваш номер телефона" name="phone" type="phone" className="modal__input"
                    onChange={(e) => dispatch(changePhone(e.target.value))}></input>
                    <button className="app__button modal__button"
                    onClick={sendData}>Оставить заявку</button>
                </>
            )
        } 
        else return; 
    }

    const renderOrderCustom = () => {
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
            totalCost += price;
            customSalads.push({
                "ingredients": composition.substring(0, composition.length - 2),
                "price": price
            })
          
            return(
                <div key={i} className='customSalad__tableRow'>
                    <div className='customSalad__tableItem'>{composition.substring(0, composition.length - 2)}</div>
                    <div className='customSalad__tableItem'>{price} руб.</div>
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

    const renderOrder = () => {
        if (Object.keys(order).length === 0)
            return; 
        const salads = salad__list;
        const items = salads.map((item, i) => {
            for (let key in order) {
                if (item.id == key)
                {
                    totalCost += order[key] * item.price;
                    defaultSalads.push({
                        "title": item.title,
                        "quantity": order[key],
                        "price": order[key] * item.price
                    })

                    return(
                        <div key={i} className='customSalad__tableRow'>
                            <div className='customSalad__tableItem'>{item.title}</div>
                            <div className='customSalad__tableItem'>{order[key]}</div>
                            <div className='customSalad__tableItem'>{order[key] * item.price} руб.</div>
                        </div>
                    )
                }
            }
            
        });
        return (
            <>
                <div className='customSalad__tableTitle'>Ваши салаты</div>
                <div className='customSalad__table'>
                    <div  className='customSalad__tableRow'>
                        <div className='customSalad__tableHeader'>Салат</div>
                        <div className='customSalad__tableHeader'>Количество</div>
                        <div className='customSalad__tableHeader'>Цена</div>
                    </div>
                    {items}
                </div>
            </>
        )
    }

    const renderForm = () => {
        if (modal === false) 
        {
            document.body.style.overflow = '';
            return;
        }
        document.body.style.overflow = 'hidden';
        return(
            <div className="modal"
            onClick={(e) => closeModal(e)}>
                <div className="modal__dialog">
                    <div className="modal__content">
                        <div>
                            <div className="modal__close" 
                            onClick={() => dispatch(toggleModal())}
                            data-close>&times;</div>
                            <div className="modal__title">{orderCustom.length || Object.keys(order).length !== 0 ? 'Ваш заказ' : 'Вы ничего не выбрали =('}</div>
                            {renderOrder()}  
                            {renderOrderCustom()}  
                            {renderTotalCost()} 
                                                     
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const form = renderForm();

    return(
        <>
            <header className="app__header">
                <Link to="/"><img className='app__logo' src={logo} alt="Молекулярная кухня" /></Link>
                <button className="app__button" onClick={() => dispatch(toggleModal())}>Заказать сейчас</button>
            </header>
            {form}
        </>
    )
}

export default AppHeader;