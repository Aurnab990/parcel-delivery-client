import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Header } from "./Header";

interface IProps {
  children: ReactNode;
}
export default function Commonlayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <Header />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
