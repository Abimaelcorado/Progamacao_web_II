import { Outlet } from "react-router-dom"
import Banner from "../../Components/Banner"
import Menu from "../../Components/Menu"

function Padrao() {
    return(
        <>
            <Banner />
            <Menu />
            <Outlet />
        </>
    )
}
export default Padrao