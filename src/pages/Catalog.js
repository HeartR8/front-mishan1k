import {Link} from "react-router-dom";

import logo from '../resources/images/logo.png';
import ghost from '../resources/images/Ghost.jpg';
import killers from '../resources/images/killers.jpg';
import demon from '../resources/images/demon.jpg';
import Header from "./Header";

export default function Catalog() {
    return (
        <div className="container">
            <Header/>

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