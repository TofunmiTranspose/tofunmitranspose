import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Dev from "./pages/Dev";
import NotFound from "./pages/NotFound";
import ThemeContext from "./context/ThemeContext";
//import Resume from "./pages/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dev" element={<Dev />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/*  <Route path="resume" element={<Resume />} /> */}
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
};

export default App;
