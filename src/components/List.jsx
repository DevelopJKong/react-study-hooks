import React, { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("숫자가 변동 되었습니다");
  }, [getItems]);
  return items.map((item, index) => <div key={index}>{item}</div>);
};

export default List;
