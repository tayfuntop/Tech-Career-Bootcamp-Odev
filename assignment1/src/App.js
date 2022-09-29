import './App.css';
import Container from "./components/container";
import Header from "./components/header";
import { InfoProvider } from "./context/Info";

function App() {
  return (
    <InfoProvider>
      <div className="App">
        <Header />
        <Container />
      </div>
    </InfoProvider>
  );
}

export default App;
