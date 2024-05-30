import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import React from "react";

type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <div className="min-h-12 px-4 py-2 bg-brand/20 rounded-tr-xl flex justify-between gap-4">
      <div className="flex gap-4">
        <Avatar
          radius="md"
          size="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-base">Sai Teja</h3>
          <p className="text-xs">online</p>
        </div>
      </div>
      <div className="flex justify-center items-center justify-self-end">
        <Button
          isIconOnly
          className="bg-brand/20 border-brand/25 border-2"
          aria-label="Like"
        >
          <InformationCircleIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
