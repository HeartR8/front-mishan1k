import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";
import Film from "./pages/Film";
import shine from "./resources/images/4.jpg";
import houseOnTheOtherSide from "./resources/images/3.jpg";
import it from "./resources/images/1.jpg";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route exact path="catalog" element={<Catalog/>}/>
                <Route path="killer" element={<Film film_name={'Сияние'} film_image={shine}/>}/>
                <Route path="ghost" element={<Film film_name={'Дом на другой стороне'} film_image={houseOnTheOtherSide}/>}/>
                <Route path="demon" element={<Film film_name={'Оно'} film_image={it}/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
