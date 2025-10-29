import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
