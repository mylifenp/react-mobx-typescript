import { createContext, useContext } from "react";
import RootStore, { IRootStore } from "./root.store";

const initialValue = {};

// @ts-ignore
const rootStore = (window.store = RootStore.create({ ...initialValue }));

const RootStoreContext = createContext({} as IRootStore);

export function useStore() {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("Store cannot be empty");
  }
  return store;
}

export { rootStore };
export const Provider = RootStoreContext.Provider;
