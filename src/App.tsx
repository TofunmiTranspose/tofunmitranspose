import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Dev from "./Pages/Dev";
import NotFound from "./Pages/NotFound";
import Resume from "./Pages/Resume";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Routes with layout */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dev" element={<Dev />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Standalone route (no layout) */}
          <Route path="resume" element={<Resume />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
