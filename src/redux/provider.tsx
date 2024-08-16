"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, useAppSelector } from "./store";
import { redirect, usePathname } from "next/navigation";

interface props {
  children: React.ReactNode;
}
const ReduxProvider: React.FC<props> = ({ children }) => {

  

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
