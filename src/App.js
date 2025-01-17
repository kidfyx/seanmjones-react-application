import './App.css';
import Header from './components/header.js'; // This line is added to import the header component
import Content from './components/content'; // This line is added to import the content component
import Footer from './components/footer.js'; // This line is added to import the footer component

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
