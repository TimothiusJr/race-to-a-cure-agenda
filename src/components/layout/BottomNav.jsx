import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/images/navigation/home-passport.png";
import agendaIcon from "../../assets/images/navigation/agenda-map.png";
import infoIcon from "../../assets/images/navigation/info-compass.png";

const navItems = [
    {
        label: "Home",
        path: "/",
        icon: homeIcon,
    },
    {
        label: "Agenda",
        path: "/agenda",
        icon: agendaIcon,
    },
    {
        label: "Info",
        path: "/info",
        icon: infoIcon,
    },
];

export default function BottomNav() {
    return (
        <nav className="bottom-nav" aria-label="Main navigation">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                        isActive ? "bottom-nav__link active" : "bottom-nav__link"
                    }
                >
                    {item.icon ? (
                        <img
                            src={item.icon}
                            alt=""
                            className="bottom-nav__image"
                            aria-hidden="true"
                        />
                    ) : (
                        <span className="bottom-nav__placeholder" aria-hidden="true">
              •
            </span>
                    )}

                    <span className="bottom-nav__label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
}