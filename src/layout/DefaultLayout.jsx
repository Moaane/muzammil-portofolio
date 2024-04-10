import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-screen flex justify-center">{children}</div>
  );
}
