import houseOnTheOtherSide from '../../resources/images/3.jpg';
import Header from "../Header";

export default function Ghost() {
    return (
        <div className="container">
            <Header/>

            <hr/>

            <h1>Дом на другой стороне</h1>
            <div className="product_img_and_short_descroption">
                <a href={houseOnTheOtherSide} target="_blank">
                    <img src={houseOnTheOtherSide} alt="Дом на другой стороне" className="film_image"/>
                </a>
                <div className="product_short_description_wrap">
                    <h2 className="product_header">Описание фильма</h2>
                    <p className="product_short_description">
                        <b>Дом на другой стороне</b> — мистический фильи про призраков
                    </p>
                    <a href="#" className="like">Лайк</a>
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
                <b>Здесь должен быть сюжетт</b><br/>
            </div>


            <hr/>
            <div className="footer">
                Дом на другой стороне<br/>
            </div>
        </div>
    )
}