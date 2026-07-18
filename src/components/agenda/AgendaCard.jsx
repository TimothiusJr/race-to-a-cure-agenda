import { Link } from "react-router-dom";

export default function AgendaCard({ session }) {
    return (
        <Link
            className="agenda-card agenda-card--link"
            to={`/agenda/session/${session.id}`}
        >
            <div className="agenda-card__time">
                {session.time}
            </div>

            <div className="agenda-card__content">
                <h3>{session.title}</h3>

                {session.details && (
                    <p className="agenda-card__details">
                        {session.details}
                    </p>
                )}

                <p className="agenda-card__responsible">
                    <span>Responsible:</span> {session.responsible}
                </p>
            </div>
        </Link>
    );
}