import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import SessionDetails from "./pages/SessionDetails";
import EventInfo from "./pages/EventInfo";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/agenda" element={<Agenda />} />
                    <Route path="/agenda/session/:sessionId" element={<SessionDetails />} />
                    <Route path="/info" element={<EventInfo />} />
                    <Route path="/resources" element={<Resources />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}