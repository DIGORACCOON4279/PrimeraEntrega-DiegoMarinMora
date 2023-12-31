import User from "../User/User"
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";
import "./IconsMenu.css"

const IconMenu = () => {
    return (
        <ul>
            <User/>
            <CartWidget/>
            <Menu/>
        </ul>
    )
}

export default IconMenu
