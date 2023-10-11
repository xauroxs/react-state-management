import React from "react";
import ReactDOM from "react-dom/client";

import { UsersProvider } from "./contexts/users.context";

import App from "./app/app.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);
