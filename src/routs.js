import { BrowserRouter, Route, Routes } from "react-router-dom"
import Padrao from "./Page/Padrao"
import Home from "./Page/Home"
import Contatos from "./Page/Contatos"
import NaoEncontrada from "./Page/NotFound"
import Votar from "./Page/Votar"
import Contador from "./Page/Contador"
import ApiTemperatura from "./Page/Api"

function RotasApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Padrao />}>
                    <Route index element={<Home />}/>
                    <Route path="contatos" element={<Contatos />}/>
                    <Route path="votar" element={<Votar />}/>
                    <Route path="contar" element={<Contador />}/>
                    <Route path="api" element={<ApiTemperatura />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RotasApp