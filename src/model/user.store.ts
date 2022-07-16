import { getParent, Instance, types, getRoot } from "mobx-state-tree";
import { IRootStore } from "./root.store";

export interface IUserStore extends Instance<typeof UserStore> {}

const UserStore = types
  .model("UserStore", {
    id: types.identifier,
    username: "Nishtha",
    password: "abc",
    login_count: 0,
  })
  .views((self) => ({
    getUsername() {
      return self.username;
    },
    getPassword() {
      return self.password;
    },
  }))
  .actions((self) => ({
    remove() {
      // return getParent(self, 2).deleteUser(self as IUserStore);
      const rootStore = getRoot<IRootStore>(self);
      rootStore.deleteUser(self as IUserStore);
    },
    setUsername(name: string) {
      self.username = name;
    },
    setPassword(password: string) {
      self.password = password;
    },
    setLoginCount(n: string | number) {
      if (typeof n === "string") {
        n = parseInt(n, 10);
      }
      if (isNaN(n)) return;
      self.login_count = n;
    },
  }));

export default UserStore;
