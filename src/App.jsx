import { Route, Routes } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import SessionDetails from "./pages/SessionDetails";
import EventInfo from "./pages/EventInfo";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="agenda" element={<Agenda />} />
                    <Route
                        path="agenda/session/:sessionId"
                        element={<SessionDetails />}
                    />
                    <Route path="info" element={<EventInfo />} />
                    <Route path="resources" element={<Resources />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}