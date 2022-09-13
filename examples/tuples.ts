import type { User } from "./user";

const getAccountBalance = (user: User) =>
  {
  if (user.id === 1) {
    return 1000}
    
  return 0;
};

const getBalanceWithUsername = (user: User): [string, number] => {
  const accountBalance: number = getAccountBalance(user);

  return [user.username, accountBalance];
};

const [username, accountBalance] = getBalanceWithUsername({
  id: 1,
  username: "johndoe",
  email: "johndoe@doe.doe",
});
