import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilesViewer from "./components/FilesViewer";
import SideIcons from "./components/SideIcons";
import { useState } from "react";
import { auth, provider } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user?.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesViewer />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img
            width={200}
            height={200}
            src="raydrive-logo.png"
            alt="Storage"
          />
          <button onClick={handleLogin}>Login to RayDrive</button>
        </div>
      )}
    </div>
  );
}

export default App;
