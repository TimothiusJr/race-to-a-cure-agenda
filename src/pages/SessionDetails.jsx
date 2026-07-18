import { Link, useParams } from "react-router-dom";
import { agendaDays } from "../data/agenda";

export default function SessionDetails() {
    const { sessionId } = useParams();

    let selectedSession = null;
    let selectedDay = null;

    for (const day of agendaDays) {
        const session = day.sessions.find(
            (item) => item.id === sessionId
        );

        if (session) {
            selectedSession = session;
            selectedDay = day;
            break;
        }
    }

    if (!selectedSession) {
        return (
            <section className="session-details-page">
                <h1>Session Not Found</h1>

                <Link className="session-details__back" to="/agenda">
                    ← Return to Agenda
                </Link>
            </section>
        );
    }

    return (
        <section className="session-details-page">
            <Link className="session-details__back" to="/agenda">
                ← Back to Agenda
            </Link>

            <header className="session-details__header">
                <p>
                    Day {selectedDay.dayNumber} · {selectedDay.title}
                </p>

                <h1>{selectedSession.title}</h1>
            </header>

            <div className="session-details__card">
                <div>
                    <span>Time</span>
                    <strong>{selectedSession.time}</strong>
                </div>

                <div>
                    <span>Responsible</span>
                    <strong>{selectedSession.responsible}</strong>
                </div>

                {selectedSession.room && (
                    <div>
                        <span>Room</span>
                        <strong>{selectedSession.room}</strong>
                    </div>
                )}

                {selectedSession.speaker && (
                    <div>
                        <span>Speaker</span>
                        <strong>{selectedSession.speaker}</strong>
                    </div>
                )}
            </div>

            <section className="session-details__description">
                <span>Session Overview</span>

                <p>
                    {selectedSession.description ||
                        selectedSession.details ||
                        "Additional session information will be provided soon."}
                </p>
            </section>
        </section>
    );
}