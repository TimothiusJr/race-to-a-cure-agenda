import { Link, useParams, useSearchParams } from "react-router-dom";
import { agendaDays } from "../data/agenda";

export default function SessionDetails() {
    const { sessionId } = useParams();
    const [searchParams] = useSearchParams();

    const requestedDay = searchParams.get("day") || "day-1";
    const requestedTrack = searchParams.get("track");

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
        const fallbackTrack =
            requestedTrack === "field" ? "field" : "in-house";

        return (
            <section className="session-details-page">
                <h1>Session Not Found</h1>

                <Link
                    className="session-details__back"
                    to={`/agenda?day=${requestedDay}&track=${fallbackTrack}`}
                >
                    ← Return to Agenda
                </Link>
            </section>
        );
    }

    const selectedTrack =
        selectedSession.track === "field" ? "field" : "in-house";

    const trackLabel =
        selectedTrack === "field"
            ? "Field Agenda"
            : "In-House Agenda";

    const sessionOverview =
        selectedSession.description || selectedSession.details;

    const hasSpeaker =
        selectedSession.speaker &&
        selectedSession.speaker !== "N/A";

    return (
        <section className="session-details-page">
            <Link
                className="session-details__back"
                to={`/agenda?day=${selectedDay.id}&track=${selectedTrack}`}
            >
                ← Back to Agenda
            </Link>

            <header className="session-details__header">
                <p>
                    Day {selectedDay.dayNumber} · {trackLabel}
                </p>

                <h1>{selectedSession.title}</h1>
            </header>

            <div className="session-details__card">
                <div>
                    <span>Time</span>
                    <strong>{selectedSession.time}</strong>
                </div>

                {selectedSession.room && (
                    <div>
                        <span>Room</span>
                        <strong>{selectedSession.room}</strong>
                    </div>
                )}

                {hasSpeaker && (
                    <div>
                        <span>Speaker</span>
                        <strong>{selectedSession.speaker}</strong>
                    </div>
                )}
            </div>

            {sessionOverview && (
                <section className="session-details__description">
                    <span>Session Overview</span>

                    <p>{sessionOverview}</p>
                </section>
            )}
        </section>
    );
}