import { Routes, Route } from "react-router-dom";
import Home from "./views/home/index";
import BlogsPage from "./views/blogs/index";
import About from "./views/about/index";
import Contact from "./views/contect/index";
import Layout from "./components/layout";
import PrivacyPolicy from "./views/privacyPolicy";
import SingleBlogView from "./views/blogs/singleBlogView";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<SingleBlogView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
