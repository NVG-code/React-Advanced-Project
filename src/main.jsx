import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import AddEventPage from "./pages/AddEventPage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <Router>
      <Root>
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/event/:eventId" element={<EventPage />} />
          <Route path="/add-event" element={<AddEventPage />} />
        </Routes>
      </Root>
    </Router>
  </ChakraProvider>
);
