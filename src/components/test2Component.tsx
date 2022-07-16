import { FC } from "react";
import { observer } from "mobx-react-lite";
import { IUserStore } from "../model/user.store";
import { Button } from "@mui/material";
import { EditUser } from "./user/EditUser";

interface Props {
  user: IUserStore;
}

const Test2Component: FC<Props> = observer(({ user }) => {
  const handleDelete = () => user.remove();
  return (
    <div>
      <div>username : {user.getUsername()}</div>
      <Button onClick={handleDelete}>delete</Button>
      <EditUser user={user} />
    </div>
  );
});

// export const Test3Component: FC<Props> = ({ name }) => {
//   const store = useStore();
//   const user = UserStore.create({
//     id: 1,
//   });
//   const usr1 = UserStore.create({id: 2, username: "abc"})
//   const usr2 = UserStore.create({id: 3, username: "abc", password: "432r4"})
//   let users = [user, usr1, usr2]
//   //console.log("user", user);
//   // store.addUser(user);
//   users.forEach((_user)=>store.addUser(_user))

//   // console.log('store', store)
//   return <>test 3 {name}</>;
// };

export default Test2Component;
