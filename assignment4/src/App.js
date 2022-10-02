import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { InfoProvider } from "./Context/Data"

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <Header />
        <Container />
        <Footer />
      </InfoProvider>
    </div>
  );
}

export default App;
