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
                <h2>InterContinental Chicago Magnificent Mile</h2>
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
                                Primary meeting space for general sessions,
                                leadership discussions, presentations, and
                                shared programming.
                            </p>
                        </div>
                    </article>

                    <article className="room-card">
                        <div className="room-card__number">02</div>

                        <div>
                            <h3>Toledo Room</h3>
                            <p>
                                Meeting space used for Field sessions,
                                workshops, STEM programming, and other
                                breakout activities.
                            </p>
                        </div>
                    </article>

                    <article className="room-card">
                        <div className="room-card__number">03</div>

                        <div>
                            <h3>Camelot Room</h3>
                            <p>
                                Main hospitality space for breakfast,
                                lunch, and select event activities.
                            </p>
                        </div>
                    </article>

                    <article className="room-card">
                        <div className="room-card__number">04</div>

                        <div>
                            <h3>Dumas Meeting Room</h3>
                            <p>
                                Supporting meeting space used for scheduled
                                breaks and headshots during the offsite.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="venue-map">
                <div className="venue-map__heading">
                    <span>Venue Guide</span>
                    <h2>Fifth Floor Plan</h2>
                </div>

                <figure className="venue-map__card">
                    <button
                        type="button"
                        className="venue-map__button"
                        onClick={() => setIsMapOpen(true)}
                        aria-label="Open enlarged fifth floor venue plan"
                    >
                        <img
                            src={venueFloorPlan}
                            alt="Fifth floor venue plan showing Renaissance Ballroom, Toledo Room, elevators, restrooms, and nearby meeting spaces"
                        />

                        <span>Tap to enlarge</span>
                    </button>

                    <figcaption>
                        Fifth Floor Venue Guide — use this map to locate
                        Renaissance Ballroom, Toledo Room, elevators,
                        restrooms, and nearby meeting spaces.
                    </figcaption>
                </figure>
            </section>

            <div className="info-card">
                <span className="info-label">Important Reminder</span>

                <p>
                    Please arrive at each session a few minutes early and
                    keep your badge visible throughout the event.
                </p>
            </div>

            {isMapOpen && (
                <div
                    className="map-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Enlarged fifth floor venue plan"
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
                            alt="Enlarged fifth floor venue plan showing Renaissance Ballroom, Toledo Room, elevators, restrooms, and nearby meeting spaces"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}