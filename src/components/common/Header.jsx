import "./Header.css";

export default function Header() {
    return (
        <header className="event-header">
            <div className="event-header__logo">
                <div className="event-header__the">THE</div>

                <div className="event-header__amazing">AMAZING</div>

                <div className="event-header__race-row">
                    <div className="event-header__race">RACE</div>
                    <div className="event-header__blood-drop" aria-hidden="true" />
                </div>

                <div className="event-header__brush">
                    <span>RACE TO A </span>
                    <span className="event-header__cure">CURE</span>
                </div>

                <div className="event-header__hematology">
                    <span>IN </span>
                    <span>HEMATOLOGY</span>
                </div>
            </div>
        </header>
    );
}