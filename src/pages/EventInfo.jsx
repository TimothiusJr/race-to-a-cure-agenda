import { useState } from "react";
import venueFloorPlan from "../assets/images/venue/venue-floor-plan.png";

export default function EventInfo() {
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <section className="event-info-page">
            <header className="event-info-header">
                <p>Race Headquarters</p>
                <h1>Event Information</h1>
            </header>

            <div className="info-card">
                <span className="info-label">Venue</span>
                <h2>Renaissance Schaumburg Convention Center Hotel</h2>
            </div>

            <div className="info-card">
                <span className="info-label">Theme</span>
                <h2>The Amazing Race</h2>
                <p>Race to a Cure in Hematology</p>
            </div>

            <div className="info-card">
                <span className="info-label">Duration</span>
                <h2>3 Days</h2>
                <p>Medical Affairs Offsite</p>
            </div>

            <section className="meeting-spaces">
                <div className="meeting-spaces__heading">
                    <span>Meeting Spaces</span>
                    <h2>Race Locations</h2>
                </div>

                <div className="meeting-spaces__grid">
                    <article className="room-card">
                        <div className="room-card__number">01</div>


                        <div>
                            <h3>Renaissance Ballroom</h3>
                            <p>
                                Main gathering space for general sessions, team activities,
                                presentations, and the Amazing Race kickoff.
                            </p>
                        </div>
                    </article>

                    <article className="room-card">
                        <div className="room-card__number">02</div>

                        <div>
                            <h3>Toledo Room</h3>
                            <p>
                                Secondary meeting space for smaller sessions, breakout activities,
                                and supporting event programming.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="venue-map">
                <div className="venue-map__heading">
                    <span>Venue Guide</span>
                    <h2>Floor Plan</h2>
                </div>

                <figure className="venue-map__card">
                    <button
                        type="button"
                        className="venue-map__button"
                        onClick={() => setIsMapOpen(true)}
                        aria-label="Open enlarged venue floor plan"
                    >
                        <img
                            src={venueFloorPlan}
                            alt="Floor plan showing the Renaissance Ballroom, Toledo Room, elevators, stairs, and registration area"
                        />

                        <span>Tap to enlarge</span>
                    </button>

                    <figcaption>
                        Use the floor plan to locate the Renaissance Ballroom, Toledo Room,
                        registration area, elevators, and nearby meeting spaces.
                    </figcaption>
                </figure>
            </section>

            <div className="info-card">
                <span className="info-label">Important Reminder</span>
                <p>
                    Please arrive at each session a few minutes early and keep your badge
                    visible throughout the event.
                </p>
            </div>

            {isMapOpen && (
                <div
                    className="map-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Enlarged venue floor plan"
                >
                    <button
                        type="button"
                        className="map-modal__close"
                        onClick={() => setIsMapOpen(false)}
                        aria-label="Close floor plan"
                    >
                        ×
                    </button>

                    <div className="map-modal__content">
                        <img
                            src={venueFloorPlan}
                            alt="Enlarged floor plan showing the Renaissance Ballroom, Toledo Room, elevators, stairs, and registration area"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}