import type { User } from "./user";

const getIdWithName = (user: User): [number, string] => {
  return [user.id, user.username];
};

const [id, username] = getIdWithName({
  id: 1,
  username: "johndoe",
  email: "johndoe@doe.doe",
});

import { useState } from 'react';

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
