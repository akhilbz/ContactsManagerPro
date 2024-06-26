import ReduxProvider from './redux_provider';
import React from 'react';
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import store from './store';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Contacts Web",
  description: "A clone of the Apple Contacts App (with a twist!)",
};

 export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
  );
}

