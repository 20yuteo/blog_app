import Logo from "../../../../../public/sampleImages/logo.png"
import Color from "../../styles/color";
import { LogoImage } from "../../atoms/Image/LogoImage";
import { HeaderProfileImage } from "../../atoms/Image/HeaderProfileImage";
import { Link } from "react-router-dom";
import BaseLink from "../../atoms/Links/BaseLink";
import { useSelector } from "react-redux";
import { BaseHeader } from "./BaseHeader";

const Header = () => {

    const selector = useSelector((state) => state);

    return (
        <BaseHeader>
            <Link to={ '/' }>
                <LogoImage src={ Logo } />
            </Link>
            { selector.users.isSignedIn ? <Link to={ '/my_page' } ><HeaderProfileImage src={ selector.users.image_url } /></Link> : <BaseLink backgroundColor={ Color.Background } borderColor={ Color.Stroke } Name={'My Page'}/> }
        </BaseHeader>
    )
}

export default Header;