import { useState, useEffect } from "react";
import Logo from "./logo192.png";

export function ReachComponent() {
  const [number, setNumbers] = useState(0);
  const addOne = () => {
    setNumbers((currentNumber) => (currentNumber += 1));
  };
  const [dogPic, setDogPic] = useState("");
  const fetchDogs = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await data.json();
    setDogPic(json.message);
  };
  useEffect(() => {
    fetchDogs();
  }, []);
  return (
    <>
      <div className="logo">
        <img src={dogPic} />
      </div>
      <div>
        <button onClick={fetchDogs}> Go Fetch</button>
      </div>
    </>
  );
}
