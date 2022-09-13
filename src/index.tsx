import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import "./index.css";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.register();
