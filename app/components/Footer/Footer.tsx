import * as React from "react";
import "./style.scss";

const Footer = ({ title }: { title: string }) => (
  <footer>
    <section>{title}</section>
  </footer>
);

export default Footer;
