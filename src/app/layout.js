"use client"
import { Provider } from "react-redux";
import "./globals.css";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Store";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body>
      <Provider store={store}>
      {children}
      </Provider>
        
      </body>
    </html>
  );
}
