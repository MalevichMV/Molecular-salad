import './AppHeader.scss'
import logo from '../../resources/logo.png'

const AppHeader = () => {
    return(
        <header className="app__header">
            <h1 className="app__title">
                <img className='app__logo' src={logo} alt="Молекулярная кухня" />
            </h1>
        </header>
    )
}

export default AppHeader;