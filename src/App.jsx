import Footer from "./components/Footer";
import { About, Blog, Contacts, Planets } from "./pages";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative">
      <Home />
      <div>
        <About />
      </div>
      <div>
        <Planets />
      </div>
      
      <div>
        <Blog />
      </div>
      <div>
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App
