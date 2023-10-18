import { ProductContextProvider } from "./Context/ApiContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserContextProvider } from "./Context/UserContext.tsx";
import { WishedContextProvider } from "./Context/WishedContext.tsx";
import { CartedContextProvider } from "./Context/CartedContext.tsx";
import { IsLoggedContextProvider } from "./Context/IsLoggedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <IsLoggedContextProvider>
        <CartedContextProvider>
          <WishedContextProvider>
            <ProductContextProvider>
              <App />
            </ProductContextProvider>
          </WishedContextProvider>
        </CartedContextProvider>
      </IsLoggedContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
