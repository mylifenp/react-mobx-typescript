import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { FC, useState } from "react";
import { useStore } from "../model";
import Test2Component from "./test2Component";
import UserStore, { IUserStore } from "../model/user.store";
import { EditUser } from "./user/EditUser";
import { observer } from "mobx-react-lite";
import { AddUser } from "./user/AddUser";

interface Props {}

const TestComponent: FC<Props> = observer(() => {
  const store = useStore();
  // const [newUser, addingNewUser] = useState<IUserStore | null>(null);

  // const handleButton = () => {
  //   addingNewUser(() => {
  //     const new_user = UserStore.create({
  //       id: uuidv4(),
  //       username: "",
  //       password: "",
  //     });
  //     return new_user;
  //   });
  // };

  return (
    <div>
      <AddUser />
      {/* {!newUser ? null : <EditUser user={newUser} />} */}
      {store.getUsers().map((user) => (
        <Test2Component key={user.id} user={user} />
      ))}
    </div>
  );
});

export default TestComponent;
