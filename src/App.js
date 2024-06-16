import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="preloader">
        <div id="pre-status">
          <div class="preload-placeholder"></div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
