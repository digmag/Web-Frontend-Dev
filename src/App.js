import "./App.css";
import MainMenuAutor from './components/autorisation/comp/mainMenuAutor'
import MainMenuRegistr from './components/registration/comp/mainMenuRegistr'
import MainApplicationMenu from "./components/applications/comp/mainApplicationMenu";
import MainProfile from "./components/profile/comp/mainProfile";
import MainMenuDeanery from "./components/deanery/comp/mainMenuDeanery";
import MainKeyMenu from "./components/keys/comp/mainKeyMenu";

function App() {
  return (
    <div className="App">
      <MainKeyMenu />
    </div>
  );
}

export default App;
