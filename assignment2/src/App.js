import { CommerceProvider } from "./context/commerce";
import Container from "./components/Container";
import './App.css';

function App() {
  return (
    <CommerceProvider>
      <Container />
    </CommerceProvider>
  );
}

export default App;
