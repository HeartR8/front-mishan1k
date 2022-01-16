import logo from "../resources/images/logo.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Логотип"/>
            <div className="site_name">
                <strong>Дом ужасов</strong>
            </div>
            <ul className="menu">
                <li className="root">
                    <Link to="/" >Главная</Link>
                </li>
                <li className="root">
                    <Link to="/catalog" >Категории</Link>
                    <ul className="dropdown">
                        <li><Link to="/ghost">Призраки</Link></li>
                        <li><Link to="/demon">Демоны</Link></li>
                        <li><Link to="/killer">Маньяки</Link></li>
                    </ul>
                </li>
                <li className="root">
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
        </div>
    )
}