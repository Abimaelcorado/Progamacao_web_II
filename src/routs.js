import { BrowserRouter, Route, Routes } from "react-router-dom"
import Padrao from "./Page/Padrao"
import Home from "./Page/Home"
import Contatos from "./Page/Contatos"
import NaoEncontrada from "./Page/NotFound"
import Votar from "./Page/Votar"
import Contador from "./Page/Contador"

function RotasApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Padrao />}>
                    <Route index element={<Home />}/>
                    <Route path="contatos" element={<Contatos />}/>
                    <Route path="votar" element={<Votar />}/>
                    <Route path="contar" element={<Contador />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RotasApp