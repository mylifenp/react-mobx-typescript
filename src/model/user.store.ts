import { Instance, types } from "mobx-state-tree";

export interface IUserStore extends Instance<typeof UserStore> {}

const UserStore = types
  .model("UserStore", {
    id: types.identifierNumber,
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
    setUsername(name: string) {
      self.username = name;
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
