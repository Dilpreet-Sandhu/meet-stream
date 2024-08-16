"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface props {
  children: React.ReactNode;
}
const ReduxProvider: React.FC<props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
