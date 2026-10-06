import { Link } from "react-router-dom";

export default function AgendaCard({ session, dayId }) {
    return (
        <Link
            className="agenda-card agenda-card--link"
            to={`/agenda/session/${session.id}?day=${dayId}`}
        >
            <div className="agenda-card__time">
                {session.time}
            </div>

            <div className="agenda-card__content">
                <h3>{session.title}</h3>

                {session.room && (
                    <p className="agenda-card__room">
                        {session.room}
                    </p>
                )}

                {session.details && (
                    <p className="agenda-card__details">
                        {session.details}
                    </p>
                )}

                {session.description && !session.details && (
                    <p className="agenda-card__details">
                        {session.description}
                    </p>
                )}
            </div>
        </Link>
    );
}