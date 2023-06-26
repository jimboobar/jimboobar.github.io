import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Games } from "./pages/Games";
import { GitHub } from "./pages/GitHub";
import { PageNotFound } from "./pages/PageNotFound";
import { Start } from "./pages/Start";

const Menu = () => (
  <div className="app-menu">
    <div className="app-menu-header">jimboobar.github.io</div>
    <div className="app-menu-links">
      <Link className="app-menu-link" to="/">
        Start
      </Link>
      <Link className="app-menu-link" to="/github">
        GitHub
      </Link>
      <Link className="app-menu-link" to="/games">
        Games
      </Link>
    </div>
  </div>
);

const Layout = () => (
  <div className="app-layout">
    <Menu />
    <Outlet />
  </div>
);

ReactDOM.createRoot(document.getElementById("app-root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="github" element={<GitHub />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
