import it from "../resources/images/1.jpg";
import shine from "../resources/images/4.jpg";
import houseOnTheOtherSide from "../resources/images/3.jpg";
import brand1 from "../resources/images/brands/1.png";
import brand2 from "../resources/images/brands/2.png";
import brand3 from "../resources/images/brands/3.jpg";
import brand4 from "../resources/images/brands/4.jpg";
import brand5 from "../resources/images/brands/5.png";
import americanExpressImg from "../resources/images/payment_methods/american-express.jpg";
import masterCardImg from "../resources/images/payment_methods/master-card.jpg";
import maestroImg from "../resources/images/payment_methods/maestro.jpg";
import paypalImg from "../resources/images/payment_methods/paypal.jpg";
import discoverImg from "../resources/images/payment_methods/discover.jpg";
import visaImg from "../resources/images/payment_methods/visa.jpg";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="body_main">
            <div className="header_main">
                <div className="main_wrap">
                    <div className="site_name_wrap">
                        <div className="site_name_main">
                            Дом ужасов
                        </div>
                        <div className="site_name_text">
                            Найди кино на вечер
                        </div>
                    </div>
                    <div className="social_icons">
                        <a href="#">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-youtube"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-pinterest-p"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="content_main">
                <div className="main_wrap">
                    <div className="content_left">
                        <div className="menu_wrap">
                            <div className="menu_wrap_text">Меню</div>
                            <div className="root_main">
                                <Link to="/" >Главная</Link>
                                {/*<a href="index.html">Главная</a>*/}
                            </div>
                            <div className="root_main">
                                <Link to="catalog" >Каталог</Link>
                                <div className="dropdown_main">
                                    <Link to="/ghost">Призраки</Link>
                                    <Link to="/demon">Демоны</Link>
                                    <Link to="/killer">Маньяки</Link>
                                </div>
                            </div>
                            <div className="root_main">
                                <Link to="contacts" >Контакты</Link>
                            </div>
                        </div>
                    </div>
                    <div className="content_right">
                        <div className="content_right_header">
                            Новинки кино
                        </div>
                        <div className="content_right_product">
                            <Link to="/demon" className="product_unit product_unit_new">
                                <img src={it} alt="Оно"/>
                                <div className="product_unit_name">
                                    Оно
                                </div>
                            </Link>
                            <Link to="/killer" className="product_unit product_unit_hot">
                                <img src={shine} alt="Сияние"/>
                                <div className="product_unit_name">
                                    Сияние
                                </div>
                            </Link>
                            <Link to="/ghost" className="product_unit">
                                <img src={houseOnTheOtherSide} alt="Дом на другой стороне"/>
                                <div className="product_unit_name">
                                    Дом на другой стороне
                                </div>
                            </Link>
                            <Link to="/demon" className="product_unit product_unit_new">
                                <img src={it} alt="Оно"/>
                                <div className="product_unit_name">
                                    Оно
                                </div>
                            </Link>
                            <Link to="/killer" className="product_unit product_unit_hot">
                                <img src={shine} alt="Сияние"/>
                                <div className="product_unit_name">
                                    Сияние
                                </div>
                            </Link>
                            <Link to="/ghost" className="product_unit">
                                <img src={houseOnTheOtherSide} alt="Дом на другой стороне"/>
                                <div className="product_unit_name">
                                    Дом на другой стороне
                                </div>
                            </Link>
                        </div>
                        <div className="content_right_header">
                            Хиты нашего сайта
                        </div>
                        <Link to="/demon" className="product_unit product_unit_new">
                            <img src={it} alt="Оно"/>
                            <div className="product_unit_name">
                                Оно
                            </div>
                        </Link>
                        <Link to="/killer" className="product_unit product_unit_hot">
                            <img src={shine} alt="Сияние"/>
                            <div className="product_unit_name">
                                Оно2
                            </div>
                        </Link>
                        <Link to="/ghost" className="product_unit">
                            <img src={houseOnTheOtherSide} alt="Дом на другой стороне"/>
                            <div className="product_unit_name">
                                Дом на другой стороне
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="instagram_feed_wrap">
                    <div className="instagram_feed_header">
                        <i className="fab fa-instagram"/>
                        <span>Instagram feed:</span>
                        Дом ужасов
                    </div>
                    <div className="instagram_feed_images">
                        <img src={brand1} alt=""/>
                        <img src={brand2} alt=""/>
                        <img src={brand3} alt=""/>
                        <img src={brand4} alt=""/>
                        <img src={brand5} alt=""/>
                    </div>
                </div>
                <div className="social_buttons_wrap">
                    <a href="#">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="#">
                        <i className="fab fa-pinterest-p"/>
                    </a>
                </div>
            </div>

            <div className="footer_content">
                <div className="main_wrap">
                    <div className="footer_content_wrap">
                        <div>
                            <div className="column_head">
                                Меню
                            </div>
                            <div className="column_link">
                                <Link to="/">Главная</Link>
                                <Link to="/catalog">Каталог</Link>
                                <Link to="/contacts">Контакты</Link>
                            </div>
                        </div>
                        <div>
                            <div className="column_head">
                                Our Account
                            </div>
                            <div className="column_link">
                                <a href="#">Your Account</a>
                                <a href="#">Personal information</a>
                                <a href="#">Addresses</a>
                                <a href="#">Discount</a>
                                <a href="#">Orders history</a>
                                <a href="#">Addresses</a>
                                <a href="#">Search Terms</a>
                            </div>
                        </div>
                        <div>
                            <div className="column_head">
                                Our Support
                            </div>
                            <div className="column_link">
                                <a href="#">Site Map</a>
                                <a href="#">Search Terms</a>
                                <a href="#">Advanced Search</a>
                                <a href="#">Mobile</a>
                                <a href="#">Contact Us</a>
                                <a href="#">Mobile</a>
                                <a href="#">Addresses</a>
                            </div>
                        </div>
                        <div className="news_letter">
                            <div className="column_head">
                                NewsLetter
                            </div>
                            <div className="news_content">
                                <div className="news_content_text">
                                    Join thousands of other people subscribe to our news
                                </div>
                                <input type="text" placeholder="Insert e-mail"/>
                                <button>SUBMIT</button>
                                <div className="cards_wrap">
                                    <img src={americanExpressImg} alt="americanExpressImg"/>
                                    <img src={masterCardImg} alt="masterCardImg"/>
                                    <img src={maestroImg} alt="maestroImg"/>
                                    <img src={paypalImg} alt="paypalImg"/>
                                    <img src={discoverImg} alt="discoverImg"/>
                                    <img src={visaImg} alt="visaImg"/>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <div className="column_head">
                                About Us
                            </div>
                            <div className="about_text_wrap">
                                <div className="about_text">
                                    Обычно здетсть что-то пишут
                                </div>
                                <div className="about_phone">
                                    <span>Phone:</span> +7 (000) 123-456
                                </div>
                                <div className="about_email">
                                    <span>e-mail:</span> contact@sit.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_copyrights">
                <div className="main_wrap">
                    <div className="footer_copyrights_text">
                        © 2021 Дом ужасов
                    </div>
                    <div className="footer_copyrights_social">
                        <a href="#">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-pinterest-p"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-google-plus-g"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-tumblr"/>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"/>
                        </a>
                        <a href="#">
                            <i className="fas fa-rss"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}