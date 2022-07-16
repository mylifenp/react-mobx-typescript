import { FC, MouseEventHandler } from "react";
import { observer } from "mobx-react-lite";
import { IUserStore } from "../../model/user.store";
import { Button, TextField } from "@mui/material";
import { useStore } from "../../model";

interface Props {
  user: IUserStore;
}

export const EditUser: FC<Props> = observer(({ user }) => {

  return (
    <div>
      <TextField
        value={user.getUsername()}
        onChange={(e) => user.setUsername(e.target.value)}
      />
      <TextField
        value={user.getPassword()}
        onChange={(e) => user.setPassword(e.target.value)}
      />
    </div>
  );
});
