import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "../src/app/store";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoutes from "./router/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<ErrorPage message="This page is not available" />}></Route>
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
