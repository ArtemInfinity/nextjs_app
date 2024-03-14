"use client";
import React from "react";
import { Send } from "lucide-react";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/genai",
  });
  return (
    <main className="flex flex-col items-center p-12">
      {/* form element */}
      {RenderForm()}
      {RenderMessages()}
      {JSON.stringify(messages)}
      {/* rendering messages */}
    </main>
  );

  // inner render functions
  function RenderForm() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              prompt: input,
            },
          });
        }}
        className="flex flex-row w-full h-full items-center gap-2"
      >
        <input
          onChange={handleInputChange}
          type="text"
          value={input}
          placeholder="ask something..."
          className="border-b border-dashed outline-none w-full px-4 py-2 text-[#4da9a9] placeholder:text-[#4da9a9] focus:placeholder-transparent"
        />
        <button
          type="submit"
          className="flex flex-row border rounded-full shadow-md"
        >
          <Send className="p-3 h-10 w-10 stroke-stone-500" />
        </button>
        {/** input */}

        {/** send button */}
      </form>
    );
  }

  function RenderMessages() {
    return <div></div>;
  }
}
