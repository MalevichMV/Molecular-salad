import './AppButtons.scss'

const AppButtons = () => {
    return (
        <>
            <div className="buttons">
                <button className='btn-choice active'>Выбрать готовый салат</button>
                <button className='btn-choice'>Создать свой салат</button>
            </div>
            <div className="divider"></div>  
        </>
    )
}
export default AppButtons;