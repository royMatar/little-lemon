import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage/BookingPage";
import Navigation from "./components/Navigation/Nav";
import React from "react";
function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
