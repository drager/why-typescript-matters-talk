import type { User } from "./user";

type ErrorHandling = {
  success: boolean;
  error?: { message: string };
};

type UserReponse = User & ErrorHandling;

const handleUserResponse = (userResponse: UserReponse): User | null => {
  if (userResponse.error) {
    // Report error to log service
    return null;
  }

  return userResponse;
};

const user: User | null = handleUserResponse({
  id: 0,
  username: "jesper",
  email: "jesper@beanloop.se",
  success: true,
});
