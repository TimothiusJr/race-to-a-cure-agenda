import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { agendaDays } from "../data/agenda";
import AgendaCard from "../components/agenda/AgendaCard";

export default function Agenda() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");

    const requestedDay = searchParams.get("day");
    const requestedTrack = searchParams.get("track");

    const selectedDay = agendaDays.some((day) => day.id === requestedDay)
        ? requestedDay
        : "day-1";

    const selectedTrack =
        requestedTrack === "field" || requestedTrack === "in-house"
            ? requestedTrack
            : "in-house";

    const activeDay =
        agendaDays.find((day) => day.id === selectedDay) ?? agendaDays[0];

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredSessions = activeDay.sessions.filter((session) => {
        if (session.track !== selectedTrack) {
            return false;
        }

        if (!normalizedQuery) {
            return true;
        }

        const searchableText = [
            session.title,
            session.details,
            session.description,
            session.responsible,
            session.speaker,
            session.room,
            session.time,
            session.track,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(normalizedQuery);
    });

    function handleDayChange(dayId) {
        setSearchParams({
            day: dayId,
            track: selectedTrack,
        });

        setSearchQuery("");
    }

    function handleTrackChange(track) {
        setSearchParams({
            day: selectedDay,
            track,
        });

        setSearchQuery("");
    }

    return (
        <section className="agenda-page">
            <header className="agenda-page__header">
                <p className="agenda-page__eyebrow">Offsite Schedule</p>
                <h1>Agenda</h1>
                <p>Select your agenda and day to view the full schedule.</p>
            </header>

            {/* Agenda Type Selector */}
            <div
                className="agenda-tabs"
                role="tablist"
                aria-label="Agenda type"
            >
                <button
                    type="button"
                    role="tab"
                    aria-selected={selectedTrack === "in-house"}
                    className={
                        selectedTrack === "in-house"
                            ? "agenda-tabs__button active"
                            : "agenda-tabs__button"
                    }
                    onClick={() => handleTrackChange("in-house")}
                >
                    In-House
                </button>

                <button
                    type="button"
                    role="tab"
                    aria-selected={selectedTrack === "field"}
                    className={
                        selectedTrack === "field"
                            ? "agenda-tabs__button active"
                            : "agenda-tabs__button"
                    }
                    onClick={() => handleTrackChange("field")}
                >
                    Field
                </button>
            </div>

            {/* Search */}
            <div className="agenda-search">
                <label htmlFor="agenda-search-input">
                    Search the schedule
                </label>

                <div className="agenda-search__field">
                    <span aria-hidden="true">⌕</span>

                    <input
                        id="agenda-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(event.target.value)
                        }
                        placeholder="Search sessions, people, rooms, or times"
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

            {/* Day Selector */}
            <div
                className="agenda-tabs"
                role="tablist"
                aria-label="Agenda days"
            >
                {agendaDays.map((day) => {
                    const isActive = selectedDay === day.id;

                    return (
                        <button
                            key={day.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={
                                isActive
                                    ? "agenda-tabs__button active"
                                    : "agenda-tabs__button"
                            }
                            onClick={() => handleDayChange(day.id)}
                        >
                            Day {day.dayNumber}
                        </button>
                    );
                })}
            </div>

            {/* Selected Day */}
            <div className="agenda-day">
                <div className="agenda-day__heading">
                    <span>
                        {selectedTrack === "in-house"
                            ? "In-House Agenda"
                            : "Field Agenda"}
                    </span>

                    <h2>Day {activeDay.dayNumber}</h2>
                </div>

                <div className="agenda-list">
                    {filteredSessions.length > 0 ? (
                        filteredSessions.map((session) => (
                            <AgendaCard
                                key={session.id}
                                session={session}
                                dayId={activeDay.id}
                            />
                        ))
                    ) : (
                        <div className="agenda-empty">
                            <strong>No sessions found</strong>
                            <p>
                                Try a different title, person, room, or time.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}