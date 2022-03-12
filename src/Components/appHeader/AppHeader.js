import './AppHeader.scss'
import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return(
        <header className="app__header">
                <Link to="/"><img className='app__logo' src={logo} alt="Молекулярная кухня" /></Link>
                <button className="app__button">Заказать сейчас</button>
        </header>
    )
}

export default AppHeader;