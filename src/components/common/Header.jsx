import "./Header.css";
import banner from "../../assets/images/header/header-banner.png";

export default function Header() {
    return (
        <div className="header-banner">
            <img src={banner} alt="Race to a Cure" />
        </div>
    );
}