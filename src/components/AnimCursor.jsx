import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor({ children }) {
  return (
    <>
      <AnimatedCursor
        outerSize={70}
        innerSize={30}
        // innerStyle={{accentColor: "255, 0, 0"}}
        color="233,78,55"
        showSystemCursor={false}
        innerScale={1}
        outerAlpha={0.5}
        outerScale={2}
        trailingSpeed={10}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      ></AnimatedCursor>
      {children}
    </>
  );
}
