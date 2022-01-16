import {Link} from "react-router-dom";

import logo from '../resources/images/logo.png';
import ghost from '../resources/images/Ghost.jpg';
import killers from '../resources/images/killers.jpg';
import demon from '../resources/images/demon.jpg';

export default function Catalog() {
    return (
        <div className="container">
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
            <hr/>

            <h1>Каталог</h1>
            <div className="catalo_wrap">
                <div className="catalog_product_unit">
                    <Link to="/ghost">
                        <img src={ghost} alt="Призраки" title="Фильмы с призраками"
                             className="catalog_image"/>
                        Призраки
                    </Link>
                </div>
                <div className="catalog_product_unit">
                    <Link to="/killer">
                        <img src={killers} alt="Маньяки" title="Фильмы с маньяками"
                             className="catalog_image"/>
                        Маньяки</Link>
                </div>
                <div className="catalog_product_unit">
                    <Link to="/demon">
                        <img src={demon} alt="Демоны" title="Фильмы с демонами"
                             className="catalog_image"/>
                        Демоны</Link>
                </div>
                <div className="catalog_product_unit">
                    <Link to="/ghost">
                        <img src={ghost} alt="Призраки" title="Фильмы с призраками"
                             className="catalog_image"/>
                        Призраки</Link>
                </div>
                <div className="catalog_product_unit">
                    <Link to="/killer">
                        <img src={killers} alt="Маньяки" title="Фильмы с маньяками"
                             className="catalog_image"/>
                        Маньяки</Link>
                </div>
                <div className="catalog_product_unit">
                    <Link to="/demon">
                        <img src={demon} alt="Демоны" title="Фильмы с демонами"
                             className="catalog_image"/>
                        Демоны</Link>
                </div>
            </div>

            <hr/>
            <div className="footer"/>
        </div>
    )
}