import { FC, useContext } from "react";

import { UsersContext } from "../../contexts/users.context";

import { User } from "../../types/user.types";

import "./add-user-button.styles.css";

const generateId = () => {
  const symbols =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=~!@#$%^&*()_+,./<>?";
  const idLength = 32;

  let id = "";
  for (let i = 0; i < idLength; i++) {
    id += symbols[Math.floor(Math.random() * symbols.length)];
  }

  return id;
};

const generateAge = () => {
  return Math.floor(Math.random() * 100);
};

const generateFirstName = () => {
  const firstNames = ["John", "Maria", "Steve", "Katie"];

  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

const generateSecondName = () => {
  const secondNnames = ["Williams", "Brown", "Smith", "Jones"];

  return secondNnames[Math.floor(Math.random() * secondNnames.length)];
};

const createNewUser = () => {
  const user: User = {
    id: generateId(),
    age: generateAge(),
    firstName: generateFirstName(),
    secondName: generateSecondName(),
  };

  return user;
};

const AddUserButton: FC = () => {
  const { setUsers } = useContext(UsersContext);

  const handleClick = (): void => {
    const newUser = createNewUser();

    setUsers((users) => [...users, newUser]);
  };

  return (
    <button onClick={handleClick} className="addUserButton">
      Create New User
    </button>
  );
};

export default AddUserButton;
