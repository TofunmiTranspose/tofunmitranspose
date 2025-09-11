import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./layout/Layout";
import Dev from "./Pages/Dev";
import NotFound from "./Pages/NotFound";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeContext>
    </BrowserRouter>
  );
};

export default App;
