import { createContext, useState } from "react";

import { User } from "../types/user.types";

type UsersContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UsersContext = createContext<UsersContextType>(
  {} as UsersContextType
);

export const UsersProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const value = {
    users,
    setUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
