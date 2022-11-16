import "./App.css";
import Nav from "../src/components/nav/Nav";
import Header from "../src/components/header/header";
import Content from "./components/content/Content";
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;
