import { FC, useContext } from "react";

import { UsersContext } from "../../contexts/users.context";

import "./users-list.styles.css";

const UsersList: FC = () => {
  const { users } = useContext(UsersContext);

  return (
    <div className="usersList">
      {users.map((user) => {
        const { id, age, firstName, secondName } = user;

        return (
          <div key={id} className="userItem">
            {firstName} {secondName} is {age} years old.
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
