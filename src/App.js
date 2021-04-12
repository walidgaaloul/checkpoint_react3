
import './App.css';
import MyPhotoComponent from "../src/Component/Profile/ProfilPhoto.js";
import FullnameComponent from "../src/Component/Profile/FullName.js";
import AdresseComponent from "../src/Component/Profile/Address.js";
function App() {
  return (
    <div className="App">
      <MyPhotoComponent />
      <AdresseComponent />
      <FullnameComponent />
    </div>
  );
}

export default App;
