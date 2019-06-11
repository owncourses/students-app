import * as React from "react";
import "./style.scss";

const ListItem = ({ item, children }: { item: any; children?: any }) => (
  <div className="list-item-wrapper">
    <li className="list-item">{item ? item : children}</li>
  </div>
);

export default ListItem;
