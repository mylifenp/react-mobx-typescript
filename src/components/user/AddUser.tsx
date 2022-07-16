import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import UserStore, { IUserStore } from "../../model/user.store";
import { Button, TextField } from "@mui/material";
import { useStore } from "../../model";

interface Props {}

export const AddUser: FC<Props> = observer(() => {
  const store = useStore();
  const [newUser, setNewUser] = useState<IUserStore | null>(null);
  const handleClick = () => {
    setNewUser(() =>
      UserStore.create({
        id: uuidv4(),
      })
    );
  };

  const handleSave = () => {
    if (!newUser) return;
    setNewUser(() => {
      store.addUser(newUser);
      return null;
    });
  };
  return (
    <>
      <Button onClick={handleClick}>add_usr</Button>
      {!newUser ? null : (
        <div>
          <TextField
            value={newUser.getUsername()}
            onChange={(e) => newUser.setUsername(e.target.value)}
          />
          <TextField
            value={newUser.getPassword()}
            onChange={(e) => newUser.setPassword(e.target.value)}
          />
          <Button onClick={handleSave}>save</Button>
        </div>
      )}
    </>
  );
});
