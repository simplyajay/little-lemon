import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="grid md:px-10 max-h-screen overflow-auto">
        <header></header>
        <NavigationBar></NavigationBar>
        <main>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
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
