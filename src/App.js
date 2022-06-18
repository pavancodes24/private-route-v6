import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import "./styles.css";
import { PrivateRoute } from "./utils/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Product />} path="/product" exact />
        </Route>
        <Route element={<Login />} path="/Login" />
      </Routes>
    </div>
  );
}
