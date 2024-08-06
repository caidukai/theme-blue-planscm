import type { ReactNode, FC } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "出海软件收款最好的搭档 - Pilotle",
  description: "出海软件收款最好的搭档",
};
const Layout = ({ children, modal }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {modal}
      </body>
    </html>
  );
};

export default Layout;

