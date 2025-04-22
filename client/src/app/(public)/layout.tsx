import React from "react";
import Footer from "@/components/Footer";
import PublicNavbar from "@/components/PublicNavbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-layout">
      <PublicNavbar />
      <main className="public-layout__main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
