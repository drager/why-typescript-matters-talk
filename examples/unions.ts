import { GuestUser, User } from "./user";

const getUsername = (user: User | GuestUser): string => user.username;
