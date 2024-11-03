import { useState } from "react";
import { toDo } from "./type";
import { Button, Text } from "@radix-ui/themes";
import CheckboxComp from "./Components/CheckboxComp";

function App() {
  const [toDo, setToDo] = useState<toDo[]>([]);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleAddToDoList = () => {
    if (input.trim() !== "") {
      setToDo((prev) => [...prev, { text: input.trim(), isComplete: false }]);
      setInput("");
      setError(null);
    } else {
      handleError();
    }
  };

  const handleError = () => {
    setError("Please type in something");

    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const handleComplete = (index: number) => {
    setToDo((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isComplete: true } : item
      )
    );

    setTimeout(() => {
      setToDo((prev) => prev.filter((item) => !item.isComplete));
    }, 500);
  };

  console.log(toDo);
  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 min-h-screen">
      <div className="flex justify-center">
        <h1 className="text-8xl font-black uppercase text-[#F9F6EE] my-20">
          To Do App
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-10">
        <input
          className="rounded-md border-2 border-gray-300 px-4 py-2 focus:ring focus:ring-teal-500 focus:outline-none"
          type="text"
          placeholder="What to do..."
          value={input}
          onChange={(e) => setInput(e.target.value.trimStart())}
        />
        <Button size="3" variant="solid" onClick={handleAddToDoList}>
          <Text size="2" weight="bold" className="text-[#1d1d1c]">
            ADD
          </Text>
        </Button>
      </div>
      {!error && (
        <div className="flex flex-col items-center mt-20 space-y-4 pl-32">
          {toDo.map((listItem, index) => (
            <div
              key={index}
              className="flex items-center space-x-8 w-full max-w-md"
            >
              <CheckboxComp
                checked={listItem.isComplete}
                onChange={() => handleComplete(index)}
              />
              <p className="text-[#F9F6EE] uppercase font-bold ">
                {listItem.text}
              </p>
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
