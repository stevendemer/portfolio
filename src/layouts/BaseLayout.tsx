import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "600"] });

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={quicksand.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
