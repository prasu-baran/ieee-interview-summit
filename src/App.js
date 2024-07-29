// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Describe } from "./components/Describe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Advertisment } from "./components/Advertisment";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div id="about">
        <About />
      </div>
      <div id="details">
        <Describe />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Advertisment />
      <Footer />
    </div>
  );
}

export default App;
