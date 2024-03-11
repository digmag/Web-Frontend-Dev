import "./App.css";
import React from 'react'
import MainMenuAutor from './components/autorisation/comp/mainMenuAutor'
import MainMenuRegistr from './components/registration/comp/mainMenuRegistr'
import MainApplicationMenu from "./components/applications/comp/mainApplicationMenu";
import MainProfile from "./components/profile/comp/mainProfile";

function App() {
  return (
    <div className="App">
        <MainMenuAutor />
    </div>
  );
}

export default App;
