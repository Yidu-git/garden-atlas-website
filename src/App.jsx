import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* <Route path="*" element={<div className="bg-red-100" />} /> */}
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
