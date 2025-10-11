import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";
import Dev from "./pages/Dev.tsx";
import NotFound from "./pages/NotFound.tsx";
import ThemeContext from "./context/ThemeContext";
import Resume from "./pages/Resume.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext>
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
      </ThemeContext>
    </BrowserRouter>
  );
};

export default App;
