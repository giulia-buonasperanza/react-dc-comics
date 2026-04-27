import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

function Header() {
    return <>
        <div className="HeaderContainer">
                <HeaderLogo className="HeaderLogo" />
                <HeaderNav className="HeaderNav"/>
        </div>
    </>
}

export default Header;