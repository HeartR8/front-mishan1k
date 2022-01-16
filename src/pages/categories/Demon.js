import it from "../../resources/images/1.jpg";
import Header from "../Header";

export default function Demon() {
    return (
        <div className="container">
            <Header/>

            <hr/>

            <h1>Оно</h1>
            <div className="product_img_and_short_descroption">
                <a href={it} target="_blank">
                    <img src={it} alt="Оно" className="film_image"/>
                </a>
                <div className="product_short_description_wrap">
                    <h2 className="product_header">Описание фильма</h2>
                    <p className="product_short_description">
                        <b>Оно</b> краткое описание
                    </p>
                </div>
            </div>

            <h2 className="product_header">Характеристики фильма</h2>
            <ul className="product_features">
                <li>Продолжительность</li>
                <li>Оценки пользователей</li>
                <li>Пользовательские теги</li>
            </ul>

            <h2 className="product_header">Подробное описание фильма</h2>
            <div className="product_full_description">
                <p>
                    <b>Здесь должен быть сюжетт</b><br/>
                </p>
            </div>

            <hr/>
            <div className="footer">
                Оно<br/>
            </div>
        </div>
    )
}