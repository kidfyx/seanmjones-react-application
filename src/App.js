import Header from './components/header.js'; // This line is added to import the header component
import Content from './components/content'; // This line is added to import the content component
import Footer from './components/footer.js'; // This line is added to import the footer component
import './styles/main.less'; // This line is added to import the main.less file

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
