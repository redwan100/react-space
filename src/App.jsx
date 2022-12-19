import { About, Blog, Contacts, Planets, Project } from "./pages";
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
    </div>
  );
}

export default App
