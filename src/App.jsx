import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className="grid">
        <header></header>
        <NavigationBar></NavigationBar>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
