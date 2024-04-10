import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen bg-white flex flex-col items-center gap-24 lg:gap-32 py-4 ">
      {children}
    </div>
  );
}
