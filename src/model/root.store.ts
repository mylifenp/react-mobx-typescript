import { destroy, detach, Instance, types } from "mobx-state-tree";
import UserStore, { IUserStore } from "./user.store";

export interface IRootStore extends Instance<typeof RootStore> {}

const RootStore = types
  .model("RootStore", {
    users: types.map(UserStore),
  })
  .actions((self) => ({
    addUser(user: IUserStore) {
      self.users.put(user);
    },
    deleteUser(user: IUserStore) {
      detach(user);
      destroy(user);
    },
  }))
  .views((self) => ({
    getUsers() {
      return Array.from(self.users.values());
    },
  }));

export default RootStore;
