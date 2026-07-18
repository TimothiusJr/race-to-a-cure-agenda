import { Link } from "react-router-dom";

export default function Resources() {
    const resources = [
        {
            id: 1,
            title: "Full Event Agenda",
            description: "View the complete three-day schedule.",
            status: "Available",
            path: "/agenda",
        },
        {
            id: 2,
            title: "Venue Map",
            description: "Locate the Renaissance Ballroom and Toledo Room.",
            status: "Available",
            path: "/info",
        },
        {
            id: 3,
            title: "Presentation Materials",
            description: "Slides and supporting event documents.",
            status: "Coming Soon",
            path: null,
        },
        {
            id: 4,
            title: "Contact Information",
            description: "Event support and important contacts.",
            status: "Coming Soon",
            path: null,
        },
    ];

    return (
        <section className="resources-page">
            <header className="resources-header">
                <p>Race Materials</p>
                <h1>Resources</h1>
                <span>Access useful files and event information.</span>
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
                        <article className="resource-card" key={resource.id}>
                            {cardContent}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}