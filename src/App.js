import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1 className="text-center mb-5">Dictionary</h1>
          <Dictionary />
        </main>
        <footer className="text-center mt-5">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/sarahnafice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarah Nafice
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SarahShecodes/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
