import { Outlet } from "react-router-dom"
import Menu from "../../Components/Menu"

function Padrao() {
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
}
export default Padrao