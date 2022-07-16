import { Button } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { useStore } from "../model";
import Test2Component from "./test2Component";

interface Props {}

const TestComponent: FC<Props> = () => {
  const store = useStore();

  const handleButton: MouseEventHandler = (event) => {
    console.log("event", event);
  };

  return (
    <div>
      <Button onClick={handleButton}>add_user</Button>
      {store.getUsers().map((user) => (
        <Test2Component user={user} />
      ))}
    </div>
  );
};

export default TestComponent;
