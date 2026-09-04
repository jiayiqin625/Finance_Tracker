import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import "./App.css";
import HomePage from "./pages/HomePage";
import EditTransaction from "./pages/EditTransaction";
import CreateTransaction from "./pages/CreateTransaction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateTransaction />} />
        <Route path="/:id" element={<EditTransaction />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
