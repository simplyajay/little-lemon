import { useEffect, useState } from "react";
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
  const [navHeight, setNavHeight] = useState(0);

  const updateNavHeight = () => {
    //get navbar height, it will be used as a padding for the main element
    const navbar = document.querySelector(".sticky-nav");

    if (navbar) {
      setNavHeight(navbar.offsetHeight);
      console.log("App navbar height:", navbar.offsetHeight);
    }
  };

  useEffect(() => {
    updateNavHeight();

    // Update navbar height on window resize
    window.addEventListener("resize", updateNavHeight);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <Router>
      <div className="grid max-h-screen">
        <header></header>
        <NavigationBar></NavigationBar>
        <main className="md:px-10">
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
