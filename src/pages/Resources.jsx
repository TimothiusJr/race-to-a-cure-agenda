import { Link } from "react-router-dom";

export default function Resources() {
    const resources = [
        {
            id: 1,
            title: "Full Event Agenda",
            description:
                "View the complete three-day In-House and Field schedules.",
            status: "Available",
            path: "/agenda",
        },
        {
            id: 2,
            title: "Fifth Floor Venue Guide",
            description:
                "Locate Renaissance Ballroom, Toledo Room, elevators, restrooms, and nearby meeting spaces.",
            status: "Available",
            path: "/info",
        },
        {
            id: 3,
            title: "Event Information",
            description:
                "Review the venue, meeting spaces, theme, and important event details.",
            status: "Available",
            path: "/info",
        },
        {
            id: 4,
            title: "Presentation Materials",
            description:
                "Access slides and supporting materials shared during the offsite.",
            status: "Coming Soon",
            path: null,
        },
        {
            id: 5,
            title: "Event Support & Contacts",
            description:
                "Find key contacts and support information for the event.",
            status: "Coming Soon",
            path: null,
        },
    ];

    return (
        <section className="resources-page">
            <header className="resources-header">
                <p>Race Materials</p>

                <h1>Resources</h1>

                <span>
                    Quick access to schedules, venue information,
                    and event materials.
                </span>
            </header>

            <div className="resources-list">
                {resources.map((resource) => {
                    const cardContent = (
                        <>
                            <div className="resource-card__number">
                                {String(resource.id).padStart(2, "0")}
                            </div>

                            <div className="resource-card__content">
                                <h2>{resource.title}</h2>

                                <p>{resource.description}</p>

                                <span
                                    className={
                                        resource.status === "Available"
                                            ? "resource-card__status available"
                                            : "resource-card__status"
                                    }
                                >
                                    {resource.status}
                                </span>
                            </div>
                        </>
                    );

                    return resource.path ? (
                        <Link
                            className="resource-card resource-card--link"
                            to={resource.path}
                            key={resource.id}
                        >
                            {cardContent}
                        </Link>
                    ) : (
                        <article
                            className="resource-card"
                            key={resource.id}
                        >
                            {cardContent}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}