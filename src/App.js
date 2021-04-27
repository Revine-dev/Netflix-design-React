import "./App.css";
import Categories from "./Catogories";

function App() {
  return (
    <>
      <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt="Logo"
          className="logo"
        />
      </header>
      <main>
        <Categories />
      </main>
    </>
  );
}

export default App;
