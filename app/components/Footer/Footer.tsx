import * as React from "react";
import "./style.scss";

const Footer = ({ title }: { title: string }) => (
  <footer className={"footer"}>
    <section className={"footer-title"}>{title}</section>
  </footer>
);

export default Footer;
