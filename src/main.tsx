import { ProductContextProvider } from "./Context/ApiContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./Context/UserContext.tsx";
import { WishedContextProvider } from "./Context/WishedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <WishedContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </WishedContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
