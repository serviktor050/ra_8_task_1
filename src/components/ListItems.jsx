import React from "react";
import Item from "./Item.jsx";

export default function ListItems(props) {
  const { list } = props;
  return list.map((listItem) => (
    <Item key={listItem.id} listItem={listItem} onClick={props.onClick} />
  ));
}
