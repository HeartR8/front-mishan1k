import Header from "./Header";

export default function Contacts() {
    return (
        <div className="container">
            <Header/>

            <hr/>

            <fieldset>
                <legend>Спросите нас</legend>
                <form action="contacts" method="post" className="contact_form">
                    <label htmlFor="username">Ваше имя</label>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="email">Ваш email</label>
                    <input type="email" id="email" name="email" placeholder="name@example.com"/><br/>
                    <label htmlFor="subject">О чем вы хотите нас спросить</label>
                    <input type="text" id="subject" name="subject"/><br/>
                    <label htmlFor="film">Название фильма</label>
                    <input type="text" id="film" name="film"/><br/>

                    <textarea name="letter" id="letterBody"
                              placeholder="Напишите здесь ваш вопрос\предложение"/><br/>

                    <input type="submit" value="Отправить"/>
                </form>
            </fieldset>
            <h2>Наши контактные данные</h2>
            <p>
                <strong>Адрес: </strong>Москва лужники <br/>
                <strong>Телефон: </strong> +7 (700) 123-456 <br/>
                <strong>Email: </strong>contact@site.com <br/>
            </p>
            <script type="text/javascript" charSet="utf-8" async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A25821c6a3773b2b475efd70729997092bee9235f491dc1a11a5040a21b3ed0e8&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"/>
            <div className="footer">&copy;"Все права защищены"</div>
        </div>
    )
}