import type { User } from "./user";

const getIdWithName = (user: User): [number, string] => {
  return [user.id, user.username];
};

const [id, username] = getIdWithName({
  id: 1,
  username: "johndoe",
  email: "johndoe@doe.doe",
});


