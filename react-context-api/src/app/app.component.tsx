import { FC } from "react";

import UsersList from "../components/users-list/users-list.component";
import AddUserButton from "../components/add-user-button/add-user-button.component";

import "./app.styles.css";

const App: FC = () => {
  return (
    <div className="container">
      <AddUserButton />
      <UsersList />
    </div>
  );
};

export default App;
