import { NavLink } from 'react-router-dom';
import './AppButtons.scss'

const AppButtons = () => {
    return (
        <>
            <div className="buttons">
            <NavLink to="/"><button className='btn-choice'> Выбрать готовый салат</button></NavLink>
                <NavLink to="/custom-salad"><button className='btn-choice'>Создать свой салат</button></NavLink>
            </div>
            <div className="divider"></div>  
        </>
    )
}
export default AppButtons;