import { useState } from "react";
import { toDo } from "./type";
import { Button } from "@radix-ui/themes";

import "./App.css";
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
    <>
      <div>
        <h1>To Do App</h1>
      </div>
      <div>
        <input
          className="border-4"
          type="text"
          placeholder="What to do"
          value={input}
          onChange={(e) => setInput(e.target.value.trimStart())}
        />
        <Button size="3" variant="surface" onClick={handleAddToDoList}>
          Add
        </Button>
      </div>
      {!error && (
        <div>
          {toDo.map((listItem, index) => (
            <div key={index} className="flex">
              <CheckboxComp
                checked={listItem.isComplete}
                onChange={() => handleComplete(index)}
              />
              <p>{listItem.text}</p>
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
