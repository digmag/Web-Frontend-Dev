import "./App.css";
import MainMenuAutor from './components/autorisation/comp/mainMenuAutor'
import MainMenuRegistr from './components/registration/comp/mainMenuRegistr'
import MainApplicationMenu from "./components/applications/comp/mainApplicationMenu";
import MainProfile from "./components/profile/comp/mainProfile";
import MainMenuDeanery from "./components/deanery/comp/mainMenuDeanery";
import ListMain from "./components/users/comp/listMain";
import MainDetails from "./components/details/comp/mainDetails";
import MainKeyMenu from "./components/keys/comp/mainKeyMenu";
import AddKey from "./components/addKey/comp/mainProfile";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/utils/router/privateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainMenuAutor />} />
          <Route path="/profile" element={<MainProfile />} />
          <Route path="/list" element={<ListMain />} />
          <Route path="/details" element={<MainDetails />} />
          <Route path="/keys" element={<MainKeyMenu />} />
          <Route path="/addkey" element={<AddKey />} />
          <Route path="/deanery" element={<MainMenuDeanery />} />
        </Route>
        <Route path="/applicationMenu" element={<MainApplicationMenu />} />
        <Route path="/registration" element={<MainMenuRegistr />} />
      </Routes>
    </div>
  );
}

export default App;
