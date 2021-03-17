import React from "react";

export default function Item(props) {
  const { listItem } = props;
  return (
    <div
      className={listItem.active ? "item-active" : "item"}
      onClick={() => props.onClick(listItem.id)}
    >
      <div className="item-name">{listItem.name}</div>
    </div>
  );
}
