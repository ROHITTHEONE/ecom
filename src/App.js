import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Kids from "./pages/categories/Kids";
import Men from "./pages/categories/Men";
import Women from "./pages/categories/Women";
import AllProducts from "./pages/shop/AllProducts";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/shop'>
          <Route path='all' element={<AllProducts />} />
        </Route>
        <Route path='categories'>
          <Route path='kids' element={<Kids />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
