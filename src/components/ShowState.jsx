import React, { useMemo } from "react";

const getNumber = (number) => {
  console.log("숫자가 변동 되었습니다");
  return number;
};

const getText = (text) => {
  console.log("글자가 변동 되었습니다");
  return text;
};

const ShowState = ({ text, number }) => {
  const showNumber = useMemo(() => getNumber(number), [number]);
  const showText = useMemo(() => getText(text), [text]);
  return (
    <div>
      <p>{showNumber}</p>
      <p>{showText}</p>
    </div>
  );
};

export default ShowState;
