import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HighlightsPage from "./pages/HighlightsPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavigationBar from "./components/NavigationBar";
import FooterNavigation from "./components/FooterNavigation";
import "./App.css";

const MainLayout = ({ sectionRefs }) => {
  return (
    <div>
      <section
        className="mt-[120px] md:mt-[101px]"
        ref={sectionRefs.home}
        id="home"
      >
        <HomePage />
      </section>
      <section ref={sectionRefs.menu} id="menu">
        <HighlightsPage />
      </section>
      <section ref={sectionRefs.testimonials} id="testimonials">
        <TestimonialsPage />
      </section>
      <section ref={sectionRefs.about} id="about">
        <AboutPage />
      </section>
    </div>
  );
};

function App() {
  const sectionRefs = {
    home: useRef(null),
    menu: useRef(null),
    about: useRef(null),
    testimonials: useRef(null),
  };
  return (
    <Router>
      <div className="grid max-h-screen">
        <header>
          <NavigationBar sectionRefs={sectionRefs}></NavigationBar>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<MainLayout sectionRefs={sectionRefs}></MainLayout>}
            ></Route>
            <Route
              path="/reservation"
              element={
                <BookingPage className="md:mt-[101px] mt:120px"></BookingPage>
              }
            ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </main>
        <footer>
          <FooterNavigation sectionRefs={sectionRefs} />
        </footer>
      </div>
    </Router>
  );
}

export default App;
