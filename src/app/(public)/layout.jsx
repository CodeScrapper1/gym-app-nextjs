import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
