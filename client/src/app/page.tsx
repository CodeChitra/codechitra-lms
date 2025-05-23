import React from "react";
import Landing from "./(public)/landing/page";
import Footer from "@/components/Footer";
import PublicNavbar from "@/components/PublicNavbar";

function page() {
  return (
    <div className="public-layout">
      <PublicNavbar />
      <main className="public-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default page;
