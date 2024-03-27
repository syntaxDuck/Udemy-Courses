import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Layout from "./components/Layout/Layout";

//Firebase porject id (Add your own id for functionality)
import { PROJECT_ID } from "./private/PRIVATE";

//Pages
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

export const FIREBASE_ENDPOINT = "https://" + [PROJECT_ID] + ".firebaseio.com/";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  return (
    <Layout loginStatus={isLoggedIn}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/index" />} />
        <Route path="/index" element={<MainPage />} />
        <Route path="/Login" element={<LoginPage onLoginChange={setIsLoggedIn}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
