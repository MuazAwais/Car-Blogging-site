import { Routes, Route } from "react-router-dom";
import Home from "./views/home/index";
import BlogsPage from "./views/blogs/index";
import About from "./views/about/index";
import Contact from "./views/contect/index";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
