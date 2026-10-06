import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/common/Header";
import { agendaDays } from "../data/agenda";

export default function Home() {
    const [selectedTrack, setSelectedTrack] = useState("in-house");

    const firstDay = agendaDays[0];

    const previewSessions = firstDay.sessions
        .filter((session) => session.track === selectedTrack)
        .slice(0, 4);

    const trackLabel =
        selectedTrack === "field"
            ? "Field Agenda"
            : "In-House Agenda";

    return (
        <>
            <Header />

            <section className="home-content">
                <div className="home-intro">
                    <p className="home-eyebrow">
                        Medical Affairs Offsite
                    </p>

                    <h2>Welcome to Race to a Cure</h2>

                    <p className="home-description">
                        Your three-day guide to sessions, activities,
                        locations, and event details.
                    </p>
                </div>

                <section className="event-card">
                    <div>
                        <span className="event-card__label">
                            Event
                        </span>
                        <strong>Race to a Cure</strong>
                    </div>

                    <div>
                        <span className="event-card__label">
                            Duration
                        </span>
                        <strong>3 Days</strong>
                    </div>

                    <div>
                        <span className="event-card__label">
                            Theme
                        </span>
                        <strong>The Amazing Race</strong>
                    </div>
                </section>

                <section className="schedule-preview">
                    <div className="schedule-preview__header">
                        <div>
                            <p>Day {firstDay.dayNumber}</p>
                            <h2>Schedule Preview</h2>
                        </div>

                        <span>{trackLabel}</span>
                    </div>

                    <div
                        className="agenda-tabs"
                        role="tablist"
                        aria-label="Schedule preview agenda type"
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={
                                selectedTrack === "in-house"
                            }
                            className={
                                selectedTrack === "in-house"
                                    ? "agenda-tabs__button active"
                                    : "agenda-tabs__button"
                            }
                            onClick={() =>
                                setSelectedTrack("in-house")
                            }
                        >
                            In-House
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={
                                selectedTrack === "field"
                            }
                            className={
                                selectedTrack === "field"
                                    ? "agenda-tabs__button active"
                                    : "agenda-tabs__button"
                            }
                            onClick={() =>
                                setSelectedTrack("field")
                            }
                        >
                            Field
                        </button>
                    </div>

                    <div className="schedule-preview__list">
                        {previewSessions.map((session) => (
                            <article
                                className="schedule-preview__item"
                                key={session.id}
                            >
                                <time>{session.time}</time>

                                <div>
                                    <h3>{session.title}</h3>

                                    {session.room && (
                                        <p>{session.room}</p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    <Link
                        className="schedule-preview__link"
                        to={`/agenda?day=${firstDay.id}&track=${selectedTrack}`}
                    >
                        View Full {trackLabel} →
                    </Link>
                </section>

                <section className="quick-access">
                    <div className="quick-access__header">
                        <p>Race Essentials</p>
                        <h2>Quick Access</h2>
                    </div>

                    <div className="quick-access__grid">
                        <Link
                            className="quick-access__card"
                            to={`/agenda?day=day-1&track=${selectedTrack}`}
                        >
                            <span className="quick-access__icon">
                                01
                            </span>

                            <div>
                                <h3>Agenda</h3>
                                <p>
                                    View the full three-day schedule.
                                </p>
                            </div>
                        </Link>

                        <Link
                            className="quick-access__card"
                            to="/info"
                        >
                            <span className="quick-access__icon">
                                02
                            </span>

                            <div>
                                <h3>Event Info</h3>
                                <p>
                                    Check venue and meeting details.
                                </p>
                            </div>
                        </Link>

                        <Link
                            className="quick-access__card"
                            to="/resources"
                        >
                            <span className="quick-access__icon">
                                03
                            </span>

                            <div>
                                <h3>Resources</h3>
                                <p>
                                    Open event files and useful links.
                                </p>
                            </div>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
}