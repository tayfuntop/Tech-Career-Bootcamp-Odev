import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { InfoProvider } from "./Context/Data"

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <Header />
        <Footer />
      </InfoProvider>
    </div>
  );
}

export default App;
