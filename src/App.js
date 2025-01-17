import logo from './logo.svg';
import './App.css';
import header from './components/header.js'; // This line is added to import the header component
import content from './components/content'; // This line is added to import the content component
import footer from './components/footer.js'; // This line is added to import the footer component

function App() {
  return (
    <div className="App">
      <header />
      <content />
      <footer />
    </div>
  );
}

export default App;
