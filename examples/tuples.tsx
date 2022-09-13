import { useState } from "react";
import type {Dispatch, SetStateAction} from 'react'

const MyButton = () => {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times</button>;
};
