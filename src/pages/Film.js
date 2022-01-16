import Header from "./Header";

export default function Film(props) {
    return (
        <div className="container">
            <Header/>

            <hr/>

            <h1>{props.film_name}</h1>
            <div className="product_img_and_short_descroption">
                <a href={props.film_image} target="_blank">
                    <img src={props.film_image} alt="Дом на другой стороне" className="film_image"/>
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