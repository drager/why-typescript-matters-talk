import { getBooksByUser } from "./get-books";

type User = {
  id: number;
  username: string;
  email: string;
};

const users: ReadonlyArray<User> = [
  { id: 1, username: "jesper", email: "jesper@beanloop.se" },
];

export const getUser = ({ userId }: { userId: User["id"] }): User | null =>
  users.find((user) => user.id === userId) || null;

export const withBooks = () => {
  const user = getUser({ userId: 1 });
  const books = getBooksByUser({ user });

  return books;
};
