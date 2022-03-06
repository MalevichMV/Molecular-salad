import './AppHeader.scss'
import logo from '../../resources/logo.png'

const AppHeader = () => {
    return(
        <header className="app__header">
                <img className='app__logo' src={logo} alt="Молекулярная кухня" />
                <button className="app__button">Заказать сейчас</button>
        </header>
    )
}

export default AppHeader;