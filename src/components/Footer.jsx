import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content 2xl:px-60 lg:px-24 md:px-8 px-4">
      <nav>
        <h6 className="footer-title text-orange">Contact Me</h6>
        <a
          href="https://www.linkedin.com/in/muzammil-alvaro"
          target="_blank"
          className="link link-hover text-black"
        >
          Linkedin
        </a>
        <a
          href="https://www.instagram.com/mil.varo"
          target=""
          className="link link-hover text-black"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100015843195299"
          target="_blank"
          className="link link-hover text-black"
        >
          Facebook
        </a>
        <a
          href="https://www.wa.link/3yyvsl"
          target="_blank"
          className="link link-hover text-black"
        >
          Whatsapp
        </a>
      </nav>
    </footer>
  );
}
