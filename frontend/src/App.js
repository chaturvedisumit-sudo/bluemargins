import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0A1220",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F1F5F9",
            fontFamily: "'Outfit', sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
