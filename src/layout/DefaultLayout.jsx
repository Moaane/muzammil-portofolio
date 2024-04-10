import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen flex flex-col items-center px-4 md:px-8 lg:px-24 gap-24 lg:gap-32 py-4 mt-12 md:mt-8 lg:mt-12">
      {children}
    </div>
  );
}
