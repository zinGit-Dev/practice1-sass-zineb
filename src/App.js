import "./app.scss";
//import Button from './components/Button';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard/>
      <Footer />
    </div>
  );
}

export default App;
