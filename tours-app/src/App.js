import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
