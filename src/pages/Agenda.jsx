import { useState } from "react";
import { agendaDays } from "../data/agenda";
import AgendaCard from "../components/agenda/AgendaCard";


export default function Agenda() {
    const [selectedDay, setSelectedDay] = useState("day-1");
    const [searchQuery, setSearchQuery] = useState("");
    const activeDay = agendaDays.find((day) => day.id === selectedDay);

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredSessions = activeDay.sessions.filter((session) => {
        if (!normalizedQuery) {
            return true;
        }

        const searchableText = [
            session.title,
            session.details,
            session.responsible,
            session.time,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(normalizedQuery);
    });

    return (
        <section className="agenda-page">
            <header className="agenda-page__header">
                <p className="agenda-page__eyebrow">Offsite Schedule</p>
                <h1>Agenda</h1>
                <p>Select a day to view the full schedule.</p>
            </header>

            <div className="agenda-search">
                <label htmlFor="agenda-search-input">Search the schedule</label>

                <div className="agenda-search__field">
                    <span aria-hidden="true">⌕</span>

                    <input
                        id="agenda-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search sessions, people, or times"
                    />

                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            aria-label="Clear agenda search"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            <div className="agenda-tabs" role="tablist" aria-label="Agenda days">
                {agendaDays.map((day) => (
                    <button
                        key={day.id}
                        type="button"
                        role="tab"
                        aria-selected={selectedDay === day.id}
                        className={
                            selectedDay === day.id
                                ? "agenda-tabs__button active"
                                : "agenda-tabs__button"
                        }
                        onClick={() => setSelectedDay(day.id)}
                    >
                        Day {day.dayNumber}
                    </button>
                ))}
            </div>

            <div className="agenda-day">
                <div className="agenda-day__heading">
                    <span>Day {activeDay.dayNumber}</span>
                    <h2>{activeDay.title}</h2>
                </div>

                <div className="agenda-list">
                    {filteredSessions.length > 0 ? (
                        filteredSessions.map((session) => (
                            <AgendaCard key={session.id} session={session} />
                        ))
                    ) : (
                        <div className="agenda-empty">
                            <strong>No sessions found</strong>
                            <p>Try a different title, person, or time.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}