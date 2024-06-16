import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <body data-spy="scroll" data-target=".navbar-default" data-offset="100">
        <main>
          {/* <div id="preloader">
            <div id="pre-status">
              <div class="preload-placeholder"></div>
            </div>
          </div> */}
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
