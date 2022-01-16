import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";
import Killer from "./pages/categories/Killer";
import Ghost from "./pages/categories/Ghost";
import Demon from "./pages/categories/Demon";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route exact path="catalog" element={<Catalog/>}/>
                <Route path="killer" element={<Killer/>}/>
                <Route path="ghost" element={<Ghost/>}/>
                <Route path="demon" element={<Demon/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
