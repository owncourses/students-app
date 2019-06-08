import * as React from "react";
import "./style.scss";

const List = ({ component, items }: { component: any; items?: any }) => {
  const ComponentToRender = component;
  let content = null;

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <div className="list-wrapper">
      <ul>{content}</ul>
    </div>
  );
};

export default List;
