import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "./components/utils/Redirect";
import { GenericPage } from "./components/GenericPage/GenericPage";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { Home } from "./components/Home/Home";
import { Profile } from "./components/Profile/Profile";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";
import { Map } from "./components/Map/Map";
import "./App.css";

function App() {
  const appContainerRef = useRef(null);

  return (
    <div className="App" ref={appContainerRef}>
      <GenericPage>
        <Routes>
          <Route path="/" element={<Redirect to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoutes>
                <SignUp />
              </PublicRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/map"
            element={
              <PrivateRoutes>
                <Map appRef={appContainerRef} />
              </PrivateRoutes>
            }
          />
        </Routes>
      </GenericPage>
    </div>
  );
}

export default App;
