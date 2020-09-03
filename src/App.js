import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <div>
        <Footer />

      </div>
    </div>
  );
}

export default App;
