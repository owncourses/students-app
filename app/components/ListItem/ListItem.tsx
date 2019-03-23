import * as React from "react";
import "./style.scss";

const ListItem = ({ item }: { item: any }) => (
  <div className="list-item-wrapper">
    <li className="list-item">{item}</li>
  </div>
);

export default ListItem;
