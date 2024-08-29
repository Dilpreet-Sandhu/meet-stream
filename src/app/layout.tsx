import ReduxProvider from "@/redux/provider";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ProtectedRoute from "./protectedRoutes";
import VideoContextProvider from "@/context/context";

const poppins = Poppins({ weight : ["100","200","300","400","500","600","700","800","900"],subsets : ["latin"]});
const inter = Inter({subsets : ["latin"]})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <VideoContextProvider>
        <ReduxProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </ReduxProvider>
        </VideoContextProvider>
      </body>
    </html>
  );
}
