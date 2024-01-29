import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Activites from "./pages/Activites";
import Activite from "./pages/Activite";
import Decouverte from "./pages/Decouverte";
import NoPage from "./pages/NoPage";

const nav_list = [
  {id:0, link: "", name: "Home", icon: "uil uil-home"},
  {id:1, link: "activites", name: "Activite", icon: "uil uil-user"},
  {id:2, link: "decouverte", name: "Decouverte", icon: "uil uil-file-alt"}
];


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation nav_list={nav_list} />}>
          <Route index element={<Home />} />
          <Route path="activites" element={<Activites />} />
          <Route exact path='/activites/:id' element={<Activite />} />
          <Route path="decouverte" element={<Decouverte />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);