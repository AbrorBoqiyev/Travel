import "./style.scss"
import logo from "../../assets/icons/лого.png"


function Navigation() {
    return ( 
        <div className="Navigation-wrapper">
            <img src={ logo } width={30} alt="pufak" />
            <div className="links">
                <a href="#">Главная</a>
                <a href="#">Экскурсии</a>
                <a href="#">Личный кабинет</a>
            </div>
        </div>
     );
}

export default Navigation;