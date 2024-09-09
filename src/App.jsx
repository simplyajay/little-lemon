import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="menu">
        <MenuPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="grid max-h-screen">
        <header></header>
        <NavigationBar></NavigationBar>
        <main className="md:px-10 ">
          <Routes>
            <Route path="/" element={<MainLayout></MainLayout>}></Route>
            <Route
              path="/reservation"
              element={<BookingPage></BookingPage>}
            ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
