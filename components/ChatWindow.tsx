import { Textarea } from "@nextui-org/input";
import React from "react";
import ChatList from "./ChatList";
import Texts from "./Texts";
import ChatHeader from "./ChatHeader";

type Props = {};

const ChatWindow = (props: Props) => {
  return (
    <div className="bg-brand/15 border-2 rounded-xl w-full h-full flex border-brand/20">
      <ChatList />

      <div className="min-h-full w-full flex flex-col">
        <div className="h-full">
          <ChatHeader />
          <Texts />
        </div>
        <Textarea
          maxRows={2}
          label="Description"
          className="relative bottom-0"
          placeholder="Enter your description (Max rows 3)"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
