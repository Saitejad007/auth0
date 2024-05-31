import React from "react";

type Props = {};

const Texts = (props: Props) => {
  const SenderText = ({ text }: any) => (
    <div className="bg-brand/40 p-2 rounded-xl max-w-[70%] w-fit px-4 self-end">
      <p>{text}</p>
    </div>
  );

  const ReceivedText = ({ text }: any) => (
    <div className="bg-gray-500 p-2 max-w-[70%] rounded-xl w-fit px-4">
      <p>{text}</p>
    </div>
  );
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-2/4 flex flex-col gap-2 p-2">
        <ReceivedText text={"Hello"} />
        <SenderText text={"Hi"} />
        <ReceivedText text={"How are u?"} />
        <SenderText text={"Good!"} />
        <SenderText text={"How r u?"} />
        <ReceivedText
          text={
            "Life's good, finances good, health good and overall enjoying life!"
          }
        />
      </div>
    </div>
  );
};

export default Texts;
