import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../Components/PreloadMedia";
import { media } from "../Constants/constants";
import "font-awesome/css/font-awesome.min.css";
// import "./Fonts/Morganite/morganiteFont.css";
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloadMedia images={Object.values(media)}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
  </React.StrictMode>
);
