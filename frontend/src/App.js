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
        theme="light"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FFFDF8",
            border: "1px solid rgba(41,90,155,0.22)",
            color: "#123A70",
            fontFamily: "'Source Serif 4', Georgia, serif",
          },
        }}
      />
    </div>
  );
}

export default App;
