import "./style.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/лого.png";
import { useState } from "react";

function myTheme(){
    if (isValid){
            setStete(
                state.color = 'red',
                state.background = '',
                state.count += 1
            )
         retu        
        }
    
}

function Navigation(props) {
    const [state, setStete] = useState({color: 'red', count: 0, background: "green"})
    return ( 
        <div >
            <header className="Nav">
                <a href="/main"> <img src={ logo } width={30} alt="pufak" /> </a>
                <div className="links">
                    <Link to={ "/main" } >Главная</Link>
                    <Link to={ "/travel" } > Экскурсии </Link>
                    <Link to={ "/private" } >Личный кабинет</Link>
                </div>
            </header >

            <div className="layout">
                <Outlet />
                <h1>Donyori jahome</h1>
            </div>
            
            <footer style={{marginTop: '10vh'}}>
                
                <h2>Mellow owrld</h2>
            </footer>
        </div>
     );

}
export default Navigation;